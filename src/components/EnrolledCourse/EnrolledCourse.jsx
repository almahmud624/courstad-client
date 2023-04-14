import { EnrolledCourseList } from "../EnrolledCourseList/EnrolledCourseList";
import { NotFound } from "../NotFound/NotFound";

export const EnrolledCourse = ({ userEnrolledCourse = [] }) => {
  return (
    <>
      {!userEnrolledCourse?.length ? (
        <NotFound
          message={"Sorry, you don't enrolled any course yet."}
          linkText={"Enroll Course"}
          link={"/courses"}
        />
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 ">
          {userEnrolledCourse?.map((course) => (
            <EnrolledCourseList key={course?._id} course={course} />
          ))}
        </div>
      )}
    </>
  );
};
