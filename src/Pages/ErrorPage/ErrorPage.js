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
                src="https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Theo Crazzolara"
                class="w-full h-full object-cover object-center"
              />
            </div>
            <div class="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
              <p class="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">
                Error 404
              </p>
              <h1 class="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
                Page not found
              </h1>

              <p class="text-gray-500 md:text-lg text-center sm:text-left mb-4 md:mb-8">
                The page you’re looking for doesn’t exist.
              </p>

              <nav class="flex sm:block gap-4 sm:space-y-1 md:space-y-2">
                <div>
                  <Link
                    to="/"
                    class="inline-block text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm md:text-base transition duration-100"
                  >
                    Home
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
