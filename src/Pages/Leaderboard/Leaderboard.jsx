import { LeaderboardTopPosition } from "../../components/LeaderboardPosition/LeaderboardTopPosition";
import { LoggedInPosition } from "../../components/LeaderboardPosition/LoggedInPosition";
import { Loader } from "../../components/Loader/Loader";
import { NotFound } from "../../components/NotFound/NotFound";
import { useGetAssignmentMarkQuery } from "../../features/assignmentMark/assignmentMarkApi";
import { useGetQuizMarkQuery } from "../../features/quizMark/quizMarkApi";
import { useGetUserQuery } from "../../features/user/userApi";
import { calculateMark } from "../../utils/calculateMark";
import { setStudentRank } from "../../utils/setStudentRank";

export const Leaderboard = () => {
  const { data: assignmentMark, isLoading: assignmentMarkLoading } =
    useGetAssignmentMarkQuery();
  const { data: quizMark, isLoading: quizMarkLoading } = useGetQuizMarkQuery();
  const { data: users } = useGetUserQuery();

  // response shown by conditionally
  const isLoading = assignmentMarkLoading || quizMarkLoading;

  // filter published assignment mark
  const publishedAssignmentMark = assignmentMark?.filter(
    (mark) => mark?.status === "published"
  );

  // find users of student
  const students = users?.filter((student) => student.role !== "admin");

  // calculate multiple assignment & quiz marks
  const finalAssignmentMark = calculateMark(
    students,
    publishedAssignmentMark,
    "assignmentMark"
  );
  const finalQuizMark = calculateMark(students, quizMark, "quizMark");

  // merge students marks
  const mergedStdMark = finalAssignmentMark?.map((aMark) => {
    const qMark = finalQuizMark?.find((qMark) => qMark?.id === aMark?.id);
    const totalMark = aMark?.assignmentMark + qMark?.quizMark;
    return {
      ...aMark,
      ...qMark,
      totalMark,
    };
  });

  // set student rank
  const rankedStd = setStudentRank(mergedStdMark);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : rankedStd?.length === 0 ? (
        <NotFound message={"Data not found"} />
      ) : (
        <section className="py-6 bg-gray-800">
          <div className="mx-auto max-w-7xl px-5 lg:px-0">
            <LoggedInPosition studentsMark={rankedStd} />
            <LeaderboardTopPosition studentsMark={rankedStd} />
          </div>
        </section>
      )}
    </>
  );
};
