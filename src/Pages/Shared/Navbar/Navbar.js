import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import avater from "../../../Assets/avatar.png";
import logo from "../../../Assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userSignOut } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div class="bg-gray-900">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center justify-between w-full">
            <Link
              to="/"
              aria-label="courstad"
              title="courstad"
              class="inline-flex items-center mr-8"
            >
              <img className="w-7" src={logo} alt="" />
              <span class="ml-2 text-xl font-bold tracking-wide text-green-300 capitalize">
                Cour<span className="text-white">stad</span>
              </span>
            </Link>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/"
                  aria-label="Our product"
                  title="Our product"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  aria-label="Our product"
                  title="Our product"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  aria-label="Blog"
                  title="Blog"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  aria-label="FAQ"
                  title="FAQ"
                  class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <ul class="flex items-center hidden space-x-8 lg:flex">
                  {user?.uid ? (
                    <>
                      <li
                        onClick={userSignOut}
                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        Sign Out
                      </li>
                      <li class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                        <img
                          class="w-10 h-10 rounded-full"
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
                          class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          Log in
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
              <label
                for="dark-toggle"
                class="inline-flex relative items-center mr-5 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="dark-toggle"
                  class="sr-only peer"
                  onChange={() => setDarkMode(!darkMode)}
                />
                <div class="w-11 h-6 bg-white-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-200 dark:peer-focus:ring-slate-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {darkMode ? "Dark" : "Light"}
                </span>
              </label>
            </ul>
          </div>

          <div class="lg:hidden">
            <div className="flex items-center gap-2">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              <label
                for="slate-toggle"
                class="inline-flex relative items-center mr-5 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="slate-toggle"
                  class="sr-only peer"
                  onChange={() => setDarkMode(!darkMode)}
                />
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {darkMode ? "Dark" : "Light"}
                </span>
              </label>
            </div>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="courstad"
                        title="courstad"
                        class="inline-flex items-center"
                      >
                        <img className="w-7" src={logo} alt="" />
                        <span class="ml-2 text-xl font-bold tracking-wide text-green-500 capitalize text-gray-100 uppercase font-">
                          Cour<span className="text-slate-800">stad</span>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          aria-label="Blog"
                          title="Blog"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          aria-label="FAQ"
                          title="FAQ"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          aria-label="Sign in"
                          title="Sign in"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Sign in
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
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
