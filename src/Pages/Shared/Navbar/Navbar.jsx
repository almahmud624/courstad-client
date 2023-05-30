import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import avater from "../../../Assets/avatar.png";
import logo from "../../../Assets/logo.png";
import { useSelector } from "react-redux";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { ProfileIconDropdown } from "../../../components/ProfileIconDropdown/ProfileIconDropdown";

const menus = [
  { name: "home", href: "/home" },
  { name: "courses", href: "/courses" },
  { name: "my classes", href: "/my-class" },
  { name: "about", href: "/about-us" },
  { name: "contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useSelector((state) => state.user);
  const home = pathname === "/" || pathname === "/home";
  return (
    <div
      className={` dark:from-gray-800  dark:to-green-900 from-green-800 to-green-800 z-50 ${
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
              {menus?.map((menu, i) => (
                <li key={i} className="capitalize">
                  <NavLink
                    to={menu?.href}
                    className={({ isActive }) =>
                      isActive
                        ? "font-medium tracking-wide dark:text-green-600 text-green-600 transition-colors duration-200"
                        : "font-medium tracking-wide dark:text-gray-100 text-slate-800 transition-colors duration-200 hover:text-teal-accent-400 hover:text-green-600 dark:hover-text-green-600 "
                    }
                  >
                    {menu?.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="w-64 lg:block hidden">
              <SearchInput setIsMenuOpen={false} />
            </div>
            <div className="flex items-center gap-2">
              <div>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                  <UserProfile
                    user={user}
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                  />
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="flex items-center gap-2">
              <UserProfile
                user={user}
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
              />
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-gray-200
                        dark:hover:bg-gray-900"
                onClick={() => setIsMenuOpen(true)}
              >
                <HiOutlineMenuAlt1 className="dark:text-gray-200 text-2xl text-gray-800" />
              </button>
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
                        <span className="ml-2 text-xl font-bold tracking-wide dark:text-green-700 text-slate-800 ">
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
                      {menus?.map((menu, i) => (
                        <li
                          key={i}
                          className="capitalize"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <NavLink
                            to={menu?.href}
                            className={({ isActive }) =>
                              isActive
                                ? "font-medium tracking-wide text-green-600 transition-colors  hover:text-geen-700 dark:hover:text-green-700 dark:text-green-600 duration-200 hover:text-deep-purple-accent-400"
                                : "font-medium tracking-wide text-gray-700 transition-colors  hover:text-geen-600 dark:hover:text-green-600 dark:text-gray-200 duration-200 hover:text-deep-purple-accent-400"
                            }
                          >
                            {menu?.name}
                          </NavLink>
                        </li>
                      ))}
                      <SearchInput setIsMenuOpen={setIsMenuOpen} />
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

const UserProfile = ({ user, showDropdown, setShowDropdown }) => {
  return (
    <>
      {user?.email ? (
        <>
          <div className={"relative tracking-wide duration-200 w-10 lg:w-full"}>
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
          </div>
        </>
      ) : (
        <>
          <div className={"relative tracking-wide duration-200 w-12 lg:w-full"}>
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
          </div>
        </>
      )}
    </>
  );
};
