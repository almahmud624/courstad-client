import Teachers from "../../Pages/Teachers/Teachers";
import { useGetCoursesQuery } from "../../features/courses/courseApi";

export const TeacherSection = () => {
  const { data, isLoading, isError } = useGetCoursesQuery({ size: 4 });
  const { courses } = data || {};
  return (
    <>
      <div className="bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl relative">
            <h2 className="mb-3 text-3xl md:text-5xl font-semibold leading-none sm:text-4xl text-gray-100">
              Meet our Teacher
            </h2>
            <p className="my-5 dark:text-gray-400 text-gray-800">
              <span className="font-base text-sm md:text-base">
                A teacher who truly cares about their students and their success
                can make all the difference in the world. They have the ability
                to connect with their students, understand their unique
                strengths and weaknesses and provide the guidance and support
                needed for them to reach their full potential.
              </span>
            </p>
          </div>
          <div className="grid gap-10 justify-center mx-auto sm:grid-cols-2 xl:col-span-2 !pt-0">
            {courses?.map((teacher) => (
              <Teachers key={Math.random()} teacher={teacher} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
