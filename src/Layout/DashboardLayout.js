import { useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-gray-700">
        <DashboardSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <header className="sticky top-0 z-50 flex w-full bg-gray-800 drop-shadow-1">
            <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
              <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                <button
                  aria-controls="sidebar"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSidebarOpen(!sidebarOpen);
                  }}
                  className="z-99999 block rounded-sm   p-1.5 shadow-sm lg:hidden"
                >
                  <span className="relative block h-5.5 w-5.5 cursor-pointer">
                    <HiMenuAlt3 className="text-white text-2xl" />
                  </span>
                </button>
                <Link className="block flex-shrink-0 lg:hidden" to="/admin">
                  <span className="ml-2 text-xl font-bold tracking-wide text-green-700 capitalize">
                    Cour
                    <span className="text-gray-100">stad</span>
                  </span>
                </Link>
              </div>

              <div className="hidden sm:block"></div>

              <div className="flex items-center gap-3 2xsm:gap-7">
                <span className="text-white font-bold">Admin</span>
              </div>
            </div>
          </header>
          <main>
            <div className="mx-auto h-screen p-4 md:p-6 2xl:p-10 ">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
