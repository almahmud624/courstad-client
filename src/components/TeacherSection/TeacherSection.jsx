import Teachers from "../../Pages/Teachers/Teachers";
import { useGetCoursesQuery } from "../../features/courses/courseApi";

export const TeacherSection = () => {
  const { data, isLoading, isError } = useGetCoursesQuery({ size: 3 });
  const { courses } = data || {};
  return (
    <>
      <section className="">
        <div className="dark:bg-gray-800 bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
            <div className="mb-10 md:mb-16">
              <h2 className="text-gray-800 dark:text-gray-200 text-3xl md:text-5xl font-semibold text-center mb-4 md:mb-6">
                Our Teachers
              </h2>

              <p className="max-w-screen-md text-gray-500 dark:text-gray-400 md:text-lg text-center mx-auto">
                he best teacher in life can completely change life in a good
                way. A teacher is the best guide for everyone
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-screen-lg m-auto">
              {courses?.map((teacher) => (
                <Teachers key={Math.random()} teacher={teacher} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
