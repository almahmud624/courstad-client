import { Link } from "react-router-dom";

export const LearnFun = () => {
  return (
    <>
      <section className="dark:bg-gray-800 bg-white pt-10">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col max-w-screen-xl overflow-hidden dark:bg-gray-900 bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2 ">
              <div className="p-2 justify-center items-center">
                <img
                  src="https://img.freepik.com/free-photo/teacher-helping-kids-class_23-2148892532.jpg?w=740&t=st=1666844392~exp=1666844992~hmac=e0e2b14cd8310f163f7fc58087407aa2c26ea1cbb8f35a824414f9f0dfe3b692"
                  alt=""
                  className="object-cover w-full lg:h-full rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 dark:bg-gray-900 dark:text-gray-200 lg:p-16 lg:pl-10 lg:w-1/2">
              <h5 className="mb-3 text-3xl md:text-5xl font-semibold leading-none sm:text-4xl">
                Learn the fun way
              </h5>
              <p className="mb-5 dark:text-gray-400 text-gray-800">
                <span className="font-base text-sm md:text-base">
                  Even more important than knowledge is confidence, which you
                  have gained through you learning journey. No matter what you
                  are looking to learn, or gain confidence in, Coursatad has
                  something for you.
                </span>
              </p>
              <div className="flex items-center">
                <div className="flex mt-2 justify-center">
                  <Link
                    className="group relative inline-block focus:outline-none focus:ring"
                    to="/courses"
                  >
                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-700 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

                    <span className="relative inline-block border-2 text-green-100 border-green-500 rounded px-8 py-3 text-md font-semibold tracking-widest capitalize">
                      Start from Today
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
