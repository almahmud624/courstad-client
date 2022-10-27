import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa";
import avater from "../../../Assets/avatar.png";
import logo from "../../../Assets/logo.png";

const Navbar = ({ darkSwitch, switchTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userSignOut } = useContext(AuthContext);

  return (
    <div className="bg-white dark:bg-gray-800 ">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <Link
              to="/"
              aria-label="courstad"
              title="courstad"
              className="inline-flex items-center mr-8"
            >
              <img className="w-7" src={logo} alt="" />
              <span className="ml-2 text-xl font-bold tracking-wide dark:text-green-700 capitalize">
                Cour<span className="dark:text-white text-slate-800">stad</span>
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  aria-label="Blog"
                  title="Blog"
                  className="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  aria-label="FAQ"
                  title="FAQ"
                  className="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                  {user?.uid ? (
                    <>
                      <li
                        onClick={userSignOut}
                        className="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer hover:text-green-700 dark:hover:text-green-700"
                      >
                        Sign Out
                      </li>
                      <li className="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400">
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          src={user?.photoURL ? user?.photoURL : avater}
                          alt=""
                          title={user?.displayName}
                        />
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link
                          to="/login"
                          aria-label="Log in"
                          title="Log in"
                          className="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          Log in
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>

              <span
                className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                onClick={darkSwitch}
              >
                {switchTheme === "dark" ? (
                  <FaMoon className="text-xl cursor-pointer" />
                ) : (
                  <FaSun className="text-xl cursor-pointer" />
                )}
              </span>
            </ul>
          </div>

          <div className="lg:hidden">
            <div className="flex items-center gap-2">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-gray-200
                        dark:hover:bg-gray-900"
                onClick={() => setIsMenuOpen(true)}
              >
                <HiOutlineMenuAlt1 className="dark:text-gray-200 text-2xl text-gray-800" />
              </button>
              <span
                className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                onClick={darkSwitch}
              >
                {switchTheme === "dark" ? (
                  <FaMoon className="text-xl cursor-pointer" />
                ) : (
                  <FaSun className="text-xl cursor-pointer" />
                )}
              </span>
            </div>
            {isMenuOpen && (
              <div className="absolute top-0 z-50 left-0 w-full">
                <div className="p-5 dark:bg-gray-700 dark:text-gray-200 bg-white border rounded shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="courstad"
                        title="courstad"
                        className="inline-flex items-center"
                      >
                        <img className="w-7" src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide  capitalize dark:text-green-700 text-slate-800 uppercase font-">
                          Cour
                          <span className="dark:text-gray-200 text-slate-800">
                            stad
                          </span>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200
                        dark:hover:bg-gray-800 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FaTimes className="dark:text-gray-200 text-gray-800 text-2xl" />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our Home"
                          title="Our Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors  hover:text-geen-700 dark:hover:text-green-700 dark:text-gray-200 duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Our Courses"
                          title="Our Courses"
                          className="font-medium tracking-wide text-gray-700 transition-colors hover:text-geen-700 dark:hover:text-green-700 dark:text-gray-200 duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors  hover:text-geen-700 dark:hover:text-green-700 dark:text-gray-200 duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          aria-label="FAQ"
                          title="FAQ"
                          className="font-medium tracking-wide text-gray-700 transition-colors hover:text-geen-700 dark:hover:text-green-700 dark:text-gray-200 duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li></li>
                      <li>
                        <ul className="space-y-5">
                          {user?.uid ? (
                            <>
                              <li
                                onClick={userSignOut}
                                className="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer hover:text-green-700 dark:hover:text-green-700"
                              >
                                Sign Out
                              </li>
                              <li className="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 block">
                                <img
                                  className="w-10 h-10 rounded-full object-cover"
                                  src={user?.photoURL ? user?.photoURL : avater}
                                  alt=""
                                  title={user?.displayName}
                                />
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <Link
                                  to="/login"
                                  aria-label="Log in"
                                  title="Log in"
                                  className="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                  Log in
                                </Link>
                              </li>
                            </>
                          )}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
