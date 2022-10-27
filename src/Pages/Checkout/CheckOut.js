import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import bkashLogo from "../../Assets/bkash-logo.png";
import bankingLogo from "../../Assets/banking-logo.png";

const CheckOut = () => {
  const course = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-screen-xl m-auto px-20 ">
        <div class="flex flex-row-reverse justify-center gap-x-20">
          <div class="px-4 pt-8 w-full">
            <div>
              <p class="text-xl font-medium">Your Order</p>
              <div class="mt-8 space-y-3 rounded-lg border dark:bg-gray-200 p-2 dark:text-gray-800">
                <div class="flex flex-col rounded-lg dark:bg-gray-200 sm:flex-row">
                  <img
                    class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={course.courseThumb}
                    alt=""
                  />
                  <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">{course.courseName}</span>
                    {/* <span class="float-right text-gray-400">42EU - 8.5US</span> */}
                    <p class="text-lg font-bold">${course.coursePrice}</p>
                  </div>
                </div>
              </div>
              <div>
                <p class="mt-8 text-lg font-medium">Select Payment Methods</p>
                <form class="mt-5 grid gap-6">
                  <div class="relative">
                    <input
                      class="peer hidden"
                      id="radio_1"
                      type="radio"
                      name="radio"
                      checked
                    />
                    <span class="peer-checked:border-green-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 dark:bg-gray-200"></span>
                    <label
                      class="peer-checked:border-2  peer-checked:border-green-700 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      for="radio_1"
                    >
                      <img class="w-8 object-contain" src={bkashLogo} alt="" />
                      <div class="ml-5 ">
                        <span class="font-semibold">bKash</span>
                      </div>
                    </label>
                  </div>
                  <div class="relative">
                    <input
                      class="peer hidden"
                      id="radio_2"
                      type="radio"
                      name="radio"
                      checked
                    />
                    <span class="peer-checked:border-green-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      class="peer-checked:border-2 peer-checked:border-green-700  flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      for="radio_2"
                    >
                      <img
                        class="w-8 object-contain"
                        src={bankingLogo}
                        alt=""
                      />
                      <div class="ml-5 items-center flex">
                        <span class="font-semibold">Mobile Banking</span>
                      </div>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="mt-10  px-4 pt-8 lg:mt-0 w-full">
            <p class="text-xl font-medium">Payment Details</p>
            <form id="login">
              <div class="bg-white dark:bg-gray-800">
                <div class="container mx-auto bg-white dark:bg-gray-800 rounded">
                  <div class="xl:w-full border-gray-300 dark:border-gray-200"></div>
                  <div class="mx-auto pt-4">
                    <div class="container mx-auto">
                      <form class="my-6 w-11/12 mx-auto xl:w-full xl:mx-0">
                        <div class="  flex flex-col mb-6">
                          <label
                            for="FirstName"
                            class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                          >
                            Your Name
                          </label>
                          <input
                            tabindex="0"
                            type="text"
                            id="FirstName"
                            name="firstName"
                            required
                            defaultValue={user?.displayName}
                            class="border border-gray-300 dark:border-gray-200 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-green-700 placeholder-gray-500 text-gray-600 dark:text-gray-400"
                            placeholder=""
                          />
                        </div>
                        <div class="  flex flex-col mb-6">
                          <label
                            for="Email"
                            class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                          >
                            Email
                          </label>
                          <div class="border dark:border-gray-200 shadow-sm rounded flex">
                            <input
                              tabindex="0"
                              type="text"
                              id="Email"
                              name="email"
                              defaultValue={user?.email}
                              required
                              class="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-600 dark:text-gray-400"
                              placeholder="example@gmail.com"
                            />
                          </div>
                        </div>
                        <div class="  flex flex-col mb-6">
                          <label
                            for="Phone Number"
                            class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                          >
                            Phone Number
                          </label>
                          <input
                            tabindex="0"
                            type="text"
                            id="Phone Number"
                            name="Phone Number"
                            required
                            class="border border-gray-300 dark:border-gray-200 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-green-700 placeholder-gray-500 text-gray-600 dark:text-gray-400"
                            placeholder=""
                          />
                        </div>

                        <div class="  flex flex-col mb-6">
                          <label
                            for="Country"
                            class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                          >
                            Country
                          </label>
                          <input
                            tabindex="0"
                            type="text"
                            id="Country"
                            name="country"
                            required
                            class="border bg-transparent border-gray-300 dark:border-gray-200 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-green-700 placeholder-gray-500 text-gray-600 dark:text-gray-400"
                            placeholder="United States"
                          />
                        </div>
                        <div class="mb-6">
                          <div class="flex">
                            <Link
                              class="group relative inline-block focus:outline-none focus:ring"
                              to=""
                            >
                              <span class="absolute inset-0 translate-x-0 translate-y-0 bg-green-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

                              <span class="relative inline-block border-2 border-green-500 rounded px-8 py-3 text-md font-bold tracking-widest dark:text-gray-800 capitalize">
                                Order Now
                              </span>
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
