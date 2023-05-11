// import { DataNotFound } from "../../../components/DataNotFound/DataNotFound";
// import { ErrorMessage } from "../../../components/ErrorMessage/ErrorMessage";
// import { Loader } from "../../../components/Loader/Loader";
import DashboardLayout from "../../../Layout/DashboardLayout";
import { QuizTable } from "../../../components/QuizTable/QuizTable";
import { useGetQuizzesQuery } from "../../../features/quiz/quizApi";

export const Quizzes = () => {
  const { data: quizzes, isLoading, isError } = useGetQuizzesQuery();
  let content;
  if (isLoading) {
    content = "<Loader />";
  } else if (!isLoading && isError) {
    content = "<ErrorMessage />";
  } else if (!isLoading && !isError && quizzes?.length === 0) {
    content = '<DataNotFound message={"Quizzes not found"} />';
  } else if (!isLoading && !isError && quizzes?.length > 0) {
    content = <QuizTable quizzes={quizzes} />;
  }
  return (
    <>
      <DashboardLayout>{content}</DashboardLayout>
    </>
  );
};
