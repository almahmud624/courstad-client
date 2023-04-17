import React from "react";
import { Link } from "react-router-dom";
import banner from "../../Assets/banner.png";

const Banner = () => {
  return (
    <>
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
    </>
  );
};

export default Banner;
