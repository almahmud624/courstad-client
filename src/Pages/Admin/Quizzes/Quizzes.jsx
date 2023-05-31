// import { DataNotFound } from "../../../components/DataNotFound/DataNotFound";
// import { ErrorMessage } from "../../../components/ErrorMessage/ErrorMessage";
// import { Loader } from "../../../components/Loader/Loader";
import DashboardLayout from "../../../Layout/DashboardLayout";
import { QuizTable } from "../../../components/QuizTable/QuizTable";
import { useGetQuizzesQuery } from "../../../features/quiz/quizApi";
import { HashLoader } from "react-spinners";
import { NotFound } from "../../../components/NotFound/NotFound";

const override = {
  display: "block",
  margin: "0 auto",
  height: "100vh",
};
export const Quizzes = () => {
  const { data: quizzes, isLoading, isError } = useGetQuizzesQuery();
  let content;
  if (isLoading) {
    content = <HashLoader color="#36d7b7" cssOverride={override} />;
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
