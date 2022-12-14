import React from "react";
import { Link } from "react-router-dom";
import errImg from "../../Assets/error-img.jpg";

const ErrorPage = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="h-80 md:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img
                src={errImg}
                loading="lazy"
                alt="Error Thumb"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
              <p className="text-red-500 text-sm md:text-base font-semibold uppercase mb-4">
                Error 404
              </p>
              <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
                Page not found
              </h1>

              <p className="text-gray-500 md:text-lg text-center sm:text-left mb-4 md:mb-8">
                The page you’re looking for doesn’t exist.
              </p>

              <nav className="flex sm:block gap-4 sm:space-y-1 md:space-y-2">
                <div className="flex">
                  <Link
                    className="group relative inline-block focus:outline-none focus:ring"
                    to="/"
                  >
                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

                    <span className="relative inline-block border-2 border-green-500 rounded px-8 py-3 text-sm font-bold tracking-widest capitalize">
                      Back to Home
                    </span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
