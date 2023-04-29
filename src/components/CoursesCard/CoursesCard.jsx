import SingleCourse from "../../Pages/SingleCourse/SingleCourse";
import HashLoader from "react-spinners/HashLoader";
import { NotFound } from "../NotFound/NotFound";

const override = {
  display: "block",
  margin: "0 auto",
  height: "100vh",
};

export const CoursesCard = ({ courses, isLoading, isError }) => {
  return (
    <>
      {isLoading ? (
        <HashLoader color="#36d7b7" cssOverride={override} />
      ) : isError ? (
        <span>Somthing Happend!</span>
      ) : courses?.length <= 0 ? (
        <NotFound message={"You Enrolled all courses"} hideBtn={"hidden"} />
      ) : (
        <div className="flex gap-x-5 dark:bg-gray-800 bg-white">
          <div
            className={
              "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl m-auto"
            }
          >
            {courses?.map((course) => (
              <SingleCourse key={Math.random()} course={course} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
