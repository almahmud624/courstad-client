import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import bkashLogo from "../../Assets/bkash-logo.png";
import bankingLogo from "../../Assets/banking-logo.png";
import { useGetCourseQuery } from "../../features/courses/courseApi";

const CheckOut = () => {
  const { id } = useParams();
  const { data: course, isLoading } = useGetCourseQuery(id);
  const { user } = useContext(AuthContext);

  return (
    <div className="dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-screen-xl m-auto px-0 md:px-20 ">
        <div className="flex flex-col md:flex-row-reverse justify-center gap-x-20">
          <div className="px-4 pt-8 w-full">
            <div>
              <p className="text-xl font-medium">Your Order</p>
              <div className="mt-8 space-y-3 rounded-lg border border-gray-400 dark:bg-gray-800 p-2 m-2 dark:text-gray-800">
                <div className="flex flex-col rounded-lg dark:bg-gray-800 md:flex-row">
                  <img
                    className="md:h-auto shadow md:w-28 rounded-md border object-cover object-center"
                    src={course?.courseThumb}
                    alt=""
                  />
                  <div className="flex w-full shadow ml-0 md:ml-2 md:mt-0 mt-2 rounded border  dark:text-gray-200 text-gray-800 dark:border-gray-400 flex-col px-4 py-4">
                    <span className="font-semibold">{course?.courseName}</span>
                    {/* <span className="float-right text-gray-400">42EU - 8.5US</span> */}
                    <p className="text-lg font-bold">${course?.coursePrice}</p>
                  </div>
                </div>
              </div>
              <div className="md:block hidden">
                <p className="mt-8 text-lg font-medium">
                  Select Payment Methods
                </p>
                <form className="mt-5 grid gap-6">
                  <div className="relative">
                    <input
                      className="peer hidden"
                      id="radio_1"
                      type="radio"
                      name="radio"
                      checked
                      readOnly
                    />
                    <span className="peer-checked:border-green-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 dark:bg-gray-200"></span>
                    <label
                      className="peer-checked:border-2  peer-checked:border-green-700 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      htmlFor="radio_1"
                    >
                      <img
                        className="w-8 object-contain"
                        src={bkashLogo}
                        alt=""
                      />
                      <div className="ml-5 ">
                        <span className="font-semibold">bKash</span>
                      </div>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      className="peer hidden"
                      id="radio_2"
                      type="radio"
                      name="radio"
                      checked
                      readOnly
                    />
                    <span className="peer-checked:border-green-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-green-700  flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      htmlFor="radio_2"
                    >
                      <img
                        className="w-8 object-contain"
                        src={bankingLogo}
                        alt=""
                      />
                      <div className="ml-5 items-center flex">
                        <span className="font-semibold">Mobile Banking</span>
                      </div>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-10  px-4 pt-8 lg:mt-0 w-full">
            <p className="text-xl font-medium">Payment Details</p>
            <div id="login">
              <div className="bg-white dark:bg-gray-800">
                <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
                  <div className="xl:w-full border-gray-300 dark:border-gray-200"></div>
                  <div className="mx-auto pt-4">
                    <div className="container mx-auto">
                      <form className="my-6 w-11/12 mx-auto xl:w-full xl:mx-0">
                        <div className="  flex flex-col mb-6">
                          <label
                            htmlFor="FirstName"
                            className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                          >
                            Your Name
                          </label>
                          <input
                            tabIndex="0"
                            type="text"
                            id="FirstName"
                            name="firstName"
                            required
                            defaultValue={user?.displayName}
                            className="border border-gray-300 dark:border-gray-200 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-green-700 placeholder-gray-500 text-gray-600 dark:text-gray-400"
                            placeholder=""
                          />
                        </div>
                        <div className="  flex flex-col mb-6">
                          <label
                            htmlFor="Email"
                            className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                          >
                            Email
                          </label>
                          <div className="border dark:border-gray-200 shadow-sm rounded flex">
                            <input
                              tabIndex="0"
                              type="text"
                              id="Email"
                              name="email"
                              defaultValue={user?.email}
                              required
                              className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-600 dark:text-gray-400"
                              placeholder="example@gmail.com"
                            />
                          </div>
                        </div>
                        <div className="  flex flex-col mb-6">
                          <label
                            htmlFor="Phone Number"
                            className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                          >
                            Phone Number
                          </label>
                          <input
                            tabIndex="0"
                            type="text"
                            id="Phone Number"
                            name="Phone Number"
                            required
                            className="border border-gray-300 dark:border-gray-200 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-green-700 placeholder-gray-500 text-gray-600 dark:text-gray-400"
                            placeholder="+8801700000000"
                          />
                        </div>

                        <div className="  flex flex-col mb-6">
                          <label
                            htmlFor="Country"
                            className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                          >
                            Country
                          </label>
                          <input
                            tabIndex="0"
                            type="text"
                            id="Country"
                            name="country"
                            required
                            className="border bg-transparent border-gray-300 dark:border-gray-200 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-green-700 placeholder-gray-500 text-gray-600 dark:text-gray-400"
                            placeholder="Bangladesh"
                          />
                        </div>
                        <div className="md:hidden block mb-8">
                          <p className="mt-8 text-lg font-medium">
                            Select Payment Methods
                          </p>
                          <div className="mt-5 grid gap-6">
                            <div className="relative">
                              <input
                                className="peer hidden"
                                id="radio_3"
                                type="radio"
                                name="radio"
                                checked
                                readOnly
                              />
                              <span className="peer-checked:border-green-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 dark:bg-gray-200"></span>
                              <label
                                className="peer-checked:border-2  peer-checked:border-green-700 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_3"
                              >
                                <img
                                  className="w-8 object-contain"
                                  src={bkashLogo}
                                  alt=""
                                />
                                <div className="ml-5 ">
                                  <span className="font-semibold">bKash</span>
                                </div>
                              </label>
                            </div>
                            <div className="relative">
                              <input
                                className="peer hidden"
                                id="radio_4"
                                type="radio"
                                name="radio"
                                checked
                                readOnly
                              />
                              <span className="peer-checked:border-green-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                              <label
                                className="peer-checked:border-2 peer-checked:border-green-700  flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_4"
                              >
                                <img
                                  className="w-8 object-contain"
                                  src={bankingLogo}
                                  alt=""
                                />
                                <div className="ml-5 items-center flex">
                                  <span className="font-semibold">
                                    Mobile Banking
                                  </span>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <div className="flex">
                            <Link
                              className="group relative inline-block focus:outline-none focus:ring"
                              to=""
                            >
                              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-700 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

                              <span className="relative inline-block border-2 border-green-500 rounded px-8 py-3 text-md font-semibold tracking-widest text-green-100 dark:text-green-100 capitalize">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
