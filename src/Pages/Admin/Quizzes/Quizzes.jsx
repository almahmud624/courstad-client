// import { DataNotFound } from "../../../components/DataNotFound/DataNotFound";
// import { ErrorMessage } from "../../../components/ErrorMessage/ErrorMessage";
// import { Loader } from "../../../components/Loader/Loader";
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
      <section className="relative overflow-x-auto grid place-content-center my-10">
        {content}
      </section>
    </>
  );
};
