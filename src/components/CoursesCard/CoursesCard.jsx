import { useSelector } from "react-redux";
import SingleCourse from "../../Pages/SingleCourse/SingleCourse";
import { useGetCoursesQuery } from "../../features/courses/courseApi";
import { useGetEnrolledCourseQuery } from "../../features/enrollCourse/enrollCourseApi";
import { useEffect, useState } from "react";

export const CoursesCard = () => {
  const [count, setCount] = useState();
  const { data } = useGetCoursesQuery({});

  const { data: enrolledCourse } = useGetEnrolledCourseQuery();
  const { user } = useSelector((state) => state.user);
  const { courses } = data || {};

  const restCourses = courses
    ?.filter(
      (v) =>
        !enrolledCourse?.some(
          (enrolld) =>
            enrolld?.course_id === v?._id && enrolld?.student_id === user?._id
        )
    )
    ?.slice(0, 6);

  useEffect(() => {
    setCount(data?.count);
  }, [data]);
  return (
    <>
      <div className="flex gap-x-5 dark:bg-gray-800 bg-white">
        <div
          className={
            "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl m-auto"
          }
        >
          {restCourses?.map((course) => (
            <SingleCourse key={Math.random()} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};
