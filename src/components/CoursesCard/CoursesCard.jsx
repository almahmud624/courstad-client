import SingleCourse from "../../Pages/SingleCourse/SingleCourse";
import { NotFound } from "../NotFound/NotFound";
import { CardLoader } from "../Loader/CardLoader/CardLoader";

const loadingCell = 6;
export const CoursesCard = ({ courses, isLoading, isError }) => {
  return (
    <>
      {isLoading ? (
        <div className="flex gap-x-5 dark:bg-gray-800 bg-white">
          <div
            className={
              "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl m-auto gap-5"
            }
          >
            {Array(loadingCell)
              .fill()
              ?.map((i) => (
                <CardLoader key={i} />
              ))}
          </div>
        </div>
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
