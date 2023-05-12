import React, { useState } from "react";
import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa";
import avater from "../../../Assets/avatar.png";
import logo from "../../../Assets/logo.png";
import { useSelector } from "react-redux";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { ProfileIconDropdown } from "../../../components/ProfileIconDropdown/ProfileIconDropdown";

const Navbar = ({ darkSwitch, switchTheme }) => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { userSignOut } = useContext(AuthContext);
  const { user } = useSelector((state) => state.user);
  const home = pathname === "/" || pathname === "/home";
  return (
    <div
      className={` dark:from-gray-800  dark:to-green-900 from-green-800 to-green-800 ${
        home ? "bg-gradient-to-b" : "bg-gradient-to-t"
      }`}
    >
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <NavLink
              to="/"
              aria-label="courstad"
              title="courstad"
              className="inline-flex items-center mr-8"
            >
              <img className="w-7" src={logo} alt="" />
              <span className="ml-2 text-xl font-bold tracking-wide dark:text-green-700 capitalize">
                Cour<span className="dark:text-white text-slate-800">stad</span>
              </span>
            </NavLink>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  to="home"
                  aria-label="Our product"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide dark:text-green-600 text-green-600 transition-colors duration-200"
                      : "font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 hover:text-green-600 dark:hover-text-green-600 "
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  aria-label="Our product"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide dark:text-green-600 text-green-600 transition-colors duration-200"
                      : "font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 hover:text-green-600 dark:hover:text-green-600 "
                  }
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-class"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide dark:text-green-600 text-green-600 transition-colors duration-200"
                      : "font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 hover:text-green-600 dark:hover:text-green-600 "
                  }
                >
                  My Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide dark:text-green-600 text-green-600 transition-colors duration-200"
                      : "font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 hover:text-green-600 dark:hover:text-green-600 "
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide dark:text-green-600 text-green-600 transition-colors duration-200"
                      : "font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 hover:text-green-600 dark:hover:text-green-600 "
                  }
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
            <div className="w-64">
              <SearchInput />
            </div>
            <div className="flex items-center gap-2">
              <div>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                  {user?.email ? (
                    <>
                      <li
                        className={
                          "font-medium relative tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 hover:text-green-600 dark:hover-text-green-600 "
                        }
                      >
                        <span onClick={() => setShowDropdown(!showDropdown)}>
                          <img
                            className="w-10 h-10 rounded-full object-cover cursor-pointer"
                            src={user?.photoURL ? user?.photoURL : avater}
                            alt=""
                            title={user?.displayName}
                          />
                        </span>
                        <ProfileIconDropdown
                          showDropdown={showDropdown}
                          setShowDropdown={setShowDropdown}
                        />
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink
                          to="/login"
                          aria-label="Log in"
                          title="Log in"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium tracking-wide dark:text-green-600 text-green-600 transition-colors duration-200"
                              : "font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 hover:text-green-600 dark:hover-text-green-600 "
                          }
                        >
                          Log in
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>

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
                      <NavLink
                        to="/"
                        aria-label="courstad"
                        title="courstad"
                        className="inline-flex items-center"
                      >
                        <img className="w-7" src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide  capitalize dark:text-green-700 text-slate-800 uppercase">
                          Cour
                          <span className="dark:text-gray-200 text-slate-800">
                            stad
                          </span>
                        </span>
                      </NavLink>
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
                        <NavLink
                          to="/"
                          aria-label="Our Home"
                          title="Our Home"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium tracking-wide text-green-600 transition-colors  hover:text-geen-700 dark:hover:text-green-700 dark:text-green-600 duration-200 hover:text-deep-purple-accent-400"
                              : "font-medium tracking-wide text-gray-700 transition-colors  hover:text-geen-600 dark:hover:text-green-600 dark:text-gray-200 duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses"
                          aria-label="Our Courses"
                          title="Our Courses"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium tracking-wide text-green-600 transition-colors  hover:text-geen-700 dark:hover:text-green-700 dark:text-green-600 duration-200 hover:text-deep-purple-accent-400"
                              : "font-medium tracking-wide text-gray-700 transition-colors  hover:text-geen-600 dark:hover:text-green-600 dark:text-gray-200 duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium tracking-wide text-green-600 transition-colors  hover:text-geen-700 dark:hover:text-green-700 dark:text-green-600 duration-200 hover:text-deep-purple-accent-400"
                              : "font-medium tracking-wide text-gray-700 transition-colors  hover:text-geen-600 dark:hover:text-green-600 dark:text-gray-200 duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          aria-label="FAQ"
                          title="FAQ"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium tracking-wide text-green-600 transition-colors  hover:text-geen-700 dark:hover:text-green-700 dark:text-green-600 duration-200 hover:text-deep-purple-accent-400"
                              : "font-medium tracking-wide text-gray-700 transition-colors  hover:text-geen-600 dark:hover:text-green-600 dark:text-gray-200 duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          FAQ
                        </NavLink>
                      </li>
                      <li>
                        <ul className="space-y-5">
                          {user?.uid ? (
                            <>
                              <li
                                onClick={userSignOut}
                                className={({ isActive }) =>
                                  isActive
                                    ? "font-medium tracking-wide text-green-600 transition-colors  hover:text-geen-700 dark:hover:text-green-700 dark:text-green-600 duration-200 hover:text-deep-purple-accent-400"
                                    : "font-medium tracking-wide text-gray-700 transition-colors  hover:text-geen-600 dark:hover:text-green-600 dark:text-gray-200 duration-200 hover:text-deep-purple-accent-400"
                                }
                              >
                                Sign Out
                              </li>
                              <li className="font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 block">
                                <Link to="/profile-edit">
                                  <img
                                    className="w-10 h-10 rounded-full object-cover cursor-pointer"
                                    src={
                                      user?.photoURL ? user?.photoURL : avater
                                    }
                                    alt=""
                                    title={user?.displayName}
                                  />
                                </Link>
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <NavLink
                                  to="/login"
                                  aria-label="Log in"
                                  title="Log in"
                                  className={({ isActive }) =>
                                    isActive
                                      ? "font-medium tracking-wide dark:text-green-600 text-green-600 transition-colors duration-200"
                                      : "font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 hover:text-green-600 dark:hover-text-green-600"
                                  }
                                >
                                  Log in
                                </NavLink>
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
