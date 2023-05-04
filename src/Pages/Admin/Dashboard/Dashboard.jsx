import { useState } from "react";
import controlcon from "../../../Assets/control.png";
import logo from "../../../Assets/logo.png";
import {
  MdVideoLibrary,
  MdAssignment,
  MdQuiz,
  MdAssignmentTurnedIn,
  MdOutlineVideoSettings,
} from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const Menus = [
    {
      title: "Videos",
      icon: MdVideoLibrary,
      // link: "/admin/videos",
      children: [
        { title: "Videos", icon: MdAssignment, link: "/admin/videos" },
        {
          title: "Add Video",
          icon: MdOutlineVideoSettings,
          link: "/admin/video/add",
        },
      ],
    },
    { title: "Assignment", icon: MdAssignment, link: "/admin/video/add" },
    { title: "Quiz", icon: MdQuiz, link: "" },
    { title: "Assignment Mark ", icon: MdAssignmentTurnedIn, link: "" },
  ];

  return (
    <div
      className={`flex  divide-slate-500 bg-slate-800 ${
        open ? "divide-x" : "divide-x-0"
      }`}
    >
      <div
        className={` ${
          open ? "w-52" : "w-0 "
        } bg-slate-800 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={controlcon}
          alt=""
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full md:hidden sm:block  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt=""
            className={`cursor-pointer duration-500 w-8 h-8 md:block hidden ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            <span className="text-xl font-bold tracking-wide text-green-500 capitalize">
              Cour<span className="text-white">stad</span>
            </span>
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li onClick={() => setMenuOpen(!menuOpen)}>
              <Link
                to={menu.link}
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2`}
              >
                <span className="md:block hidden">
                  <menu.icon className="w-5 h-5" />
                </span>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </Link>

              <ul
                className={`${
                  menu?.children?.length > 0 && menuOpen
                    ? "origin-bottom duration-200 p-2 ml-5 bg-slate-700 mt-2 rounded "
                    : "hidden"
                }`}
              >
                {menu?.children?.map((child, index) => (
                  <li className="">
                    <Link
                      to={child.link}
                      key={index}
                      className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
                    >
                      <span className="md:block hidden">
                        <menu.icon className="w-5 h-5" />
                      </span>
                      <span
                        className={`${
                          menuOpen && !open ? "hidden" : undefined
                        } origin-left duration-200`}
                      >
                        {child.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 px-7 ">
        <Outlet />
      </div>
    </div>
  );
};
