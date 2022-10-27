import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import banner from "../../Assets/banner.png";
import { CourseDataContext } from "../../Contexts/CourseData";
import Courses from "../Courses/Courses";
import Teachers from "../Teachers/Teachers";

const Home = () => {
  const { courses } = useContext(CourseDataContext);
  return (
    <div>
      <div className="bg-gradient-to-r dark:from-gray-800 dark:via-teal-800 dark:to-green-700 from-white  to-green-800">
        <section className="max-w-screen-xl px-4 md:px-8 pt-10 md:pt-0 mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/2 text-start   flex flex-col justify-center  mb-6 sm:mb-12 lg:mb-0">
              <h1 className="dark:text-gray-200 text-gray-800 text-4xl sm:text-5xl md:text-6xl font-bold  mb-4 md:mb-8">
                Enabling Is What <br></br>We Do
              </h1>

              <p className="max-w-md text-start text-gray-800 dark:text-gray-300 xl:text-md  leading-relxed">
                You Too Can Have A Information Like Mine.Work Hard, Learn Harder
              </p>
              <div className="flex mt-8">
                <Link
                  className="group relative inline-block focus:outline-none focus:ring"
                  to="/courses"
                >
                  <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-700 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

                  <span className="relative inline-block border-2 text-green-100 border-green-500 rounded px-8 py-3 text-md font-semibold tracking-widest capitalize">
                    all courses
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center mb-12 md:mb-16">
              <div className="overflow-hidden relative z-10 top-12 bottom-0 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                <img
                  src={banner}
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="dark:bg-gray-800 bg-white pt-16">
        <div className="">
          <h1 className="text-center text-3xl md:text-5xl font-semibold dark:text-gray-200 text-gray-800">
            Our Courses
          </h1>
          <p className="text-center my-3 text-sm md:text-base md:my-5 dark:text-gray-400 text-gray-800 max-w-sm m-auto ">
            Learn more skills, be more competitive,Affordable online courses for
            everyone
          </p>
        </div>
        <Courses />
        <div className="flex mt-8 justify-center">
          <Link
            className="group relative inline-block focus:outline-none focus:ring"
            to="/courses"
          >
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-700 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

            <span className="relative inline-block border-2 text-green-100 border-green-500 rounded px-8 py-3 text-md font-semibold tracking-widest capitalize">
              Explore More
            </span>
          </Link>
        </div>
      </section>
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
              {courses.slice(0, 3)?.map((teacher) => (
                <Teachers key={Math.random()} teacher={teacher} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
