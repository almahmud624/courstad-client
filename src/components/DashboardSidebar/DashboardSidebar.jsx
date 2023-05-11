import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
// import Logo from "../images/logo/logo.svg";
import {
  MdVideoLibrary,
  MdAssignment,
  MdQuiz,
  MdAssignmentTurnedIn,
  MdOutlineVideoSettings,
} from "react-icons/md";
const Menus = [
  {
    title: "Videos",
    icon: MdVideoLibrary,
    children: [
      { title: "Videos", icon: MdAssignment, link: "/admin/videos" },
      {
        title: "Add Video",
        icon: MdOutlineVideoSettings,
        link: "/admin/video/add",
      },
    ],
  },
  {
    title: "Assignment",
    icon: MdAssignment,
    children: [
      { title: "Assignment", icon: MdAssignment, link: "/admin/assignments" },
      {
        title: "Add Assignment",
        icon: MdOutlineVideoSettings,
        link: "/admin/assignment/add",
      },
    ],
  },
  {
    title: "Quiz",
    icon: MdQuiz,
    children: [
      { title: "Quiz", icon: MdAssignment, link: "/admin/quizzes" },
      {
        title: "Add Quiz",
        icon: MdOutlineVideoSettings,
        link: "/admin/quiz/add",
      },
    ],
  },
  {
    title: "Assignment Mark ",
    icon: MdAssignmentTurnedIn,
    link: "/admin/assignmentMark",
  },
];

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-40 flex h-screen w-72.5 flex-col overflow-y-hidden bg-gray-800 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 mt-3">
        <NavLink to="/admin">
          <span className="ml-2 text-xl font-bold tracking-wide text-green-700 capitalize">
            Cour<span className="text-gray-100">stad</span>
          </span>
        </NavLink>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-200">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {Menus?.map((item, i) => (
                <SidebarLinkGroup
                  activeCondition={item?.children?.find(
                    (v) => v.link === pathname
                  )}
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded
                              ? handleClick()
                              : setSidebarExpanded(true);
                          }}
                        >
                          <NavLink
                            to={item?.link}
                            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-graydark  ${
                              item?.children?.find(
                                (v) => v.link === pathname
                              ) && "bg-green-700"
                            }`}
                          >
                            <span className="md:block hidden">
                              <item.icon className="w-5 h-5" />
                            </span>
                            {item?.title}
                            {item?.children ? (
                              <svg
                                className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                  open && "rotate-180"
                                }`}
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                  fill=""
                                />
                              </svg>
                            ) : undefined}
                          </NavLink>
                        </span>

                        {item?.children ? (
                          <div
                            className={`translate transform overflow-hidden ${
                              !open && "hidden"
                            }`}
                          >
                            <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                              {item?.children?.map((child) => (
                                <li>
                                  <NavLink
                                    to={child?.link}
                                    className={({ isActive }) =>
                                      "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-gray-200 duration-300 ease-in-out hover:text-white " +
                                      (isActive && "!text-green-500")
                                    }
                                  >
                                    {child?.title}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : undefined}
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
