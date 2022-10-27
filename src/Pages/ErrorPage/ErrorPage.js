import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div class="grid sm:grid-cols-2 gap-8">
            <div class="h-80 md:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img
                src="https://img.freepik.com/free-photo/human-face-expressions-emotions-forgetful-dark-skinned-man-holding-his-hand-his-head-with-painstaking-expression-as-he-struggling-remember-something_273609-5932.jpg?w=740&t=st=1666836318~exp=1666836918~hmac=5d37eca3937dc3dc32d6c56f4f44fdc6e9ea11b2ab34118bcb5306426c8d614a"
                loading="lazy"
                alt="Error Thumb"
                class="w-full h-full object-cover object-center"
              />
            </div>
            <div class="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
              <p class="text-red-500 text-sm md:text-base font-semibold uppercase mb-4">
                Error 404
              </p>
              <h1 class="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
                Page not found
              </h1>

              <p class="text-gray-500 md:text-lg text-center sm:text-left mb-4 md:mb-8">
                The page you’re looking for doesn’t exist.
              </p>

              <nav class="flex sm:block gap-4 sm:space-y-1 md:space-y-2">
                <div class="flex">
                  <Link
                    class="group relative inline-block focus:outline-none focus:ring"
                    to="/"
                  >
                    <span class="absolute inset-0 translate-x-0 translate-y-0 bg-green-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

                    <span class="relative inline-block border-2 border-green-500 rounded px-8 py-3 text-sm font-bold tracking-widest capitalize">
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
