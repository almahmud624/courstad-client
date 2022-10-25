import React from "react";

const SingleCourse = () => {
  return (
    <div>
      <div>
        <a
          href="#"
          class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Austin Wade"
            class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
          />

          <div class="flex gap-2 absolute left-0 bottom-2">
            <span class="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg px-3 py-1.5">
              -50%
            </span>
            <span class="bg-white text-gray-800 text-sm font-bold tracking-wider uppercase rounded-lg px-3 py-1.5">
              New
            </span>
          </div>
        </a>

        <div class="flex justify-between items-start gap-2 px-2">
          <div class="flex flex-col">
            <a
              href="#"
              class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
            >
              Fancy Outfit
            </a>
            <span class="text-gray-500">by Fancy Brand</span>
          </div>

          <div class="flex flex-col items-end">
            <span class="text-gray-600 lg:text-lg font-bold">$19.99</span>
            <span class="text-red-500 text-sm line-through">$39.99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
