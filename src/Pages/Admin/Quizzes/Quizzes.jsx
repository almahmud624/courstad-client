import DashboardLayout from "../../../Layout/DashboardLayout";
import { QuizTable } from "../../../components/QuizTable/QuizTable";
import { useGetQuizzesQuery } from "../../../features/quiz/quizApi";
import { NotFound } from "../../../components/NotFound/NotFound";
import { Loader } from "../../../components/Loader/Loader";

export const Quizzes = () => {
  const { data: quizzes, isLoading, isError } = useGetQuizzesQuery();
  let content;
  if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && isError) {
    content = <span>These was an error</span>;
  } else if (!isLoading && !isError && quizzes?.length === 0) {
    content = (
      <NotFound
        message={"Quizzes not found"}
        link={"/admin/quiz/add"}
        linkText={"Add Quiz"}
      />
    );
  } else if (!isLoading && !isError && quizzes?.length > 0) {
    content = <QuizTable quizzes={quizzes} />;
  }
  return (
    <>
      <DashboardLayout>{content}</DashboardLayout>
    </>
  );
};
