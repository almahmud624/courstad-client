import { useGetCourseCategoriesQuery } from "../../features/courses/courseApi";
import { Link } from "react-router-dom";
import { FaBusinessTime } from "react-icons/fa";
import { CgDesignmodo } from "react-icons/cg";
import { MdDeveloperMode, MdOutlineScience } from "react-icons/md";
import { SiMarketo, SiStorybook } from "react-icons/si";
import { GiVirtualMarker } from "react-icons/gi";

const colorIcons = [
  { icon: <FaBusinessTime />, color: "#0055DF" },
  { icon: <CgDesignmodo />, color: "#C8483A" },
  { icon: <MdDeveloperMode />, color: "#21759B" },
  { icon: <SiMarketo />, color: "#15803D" },
  { icon: <SiStorybook />, color: "#115C58" },
  { icon: <GiVirtualMarker />, color: "#576CBC" },
  { icon: <MdOutlineScience />, color: "#714DAF" },
];
export const CourseCategory = () => {
  const { data: categories } = useGetCourseCategoriesQuery();
  const categoryIcons = (i) => {
    return colorIcons?.[i]?.icon;
  };
  return (
    <section className=" dark:bg-gray-800 bg-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:pb-10">
        <div>
          <h1 className="text-center text-3xl md:text-5xl font-semibold dark:text-gray-200 text-gray-800">
            Explore <span className=" ">Popular</span> Categories
          </h1>
        </div>
        <div
          className={
            "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 m-auto gap-7 pt-16"
          }
        >
          {categories?.map((category, i) => (
            <Link
              key={i}
              className="group flex flex-col justify-center items-center text-center rounded-xl border border-gray-800 bg-gray-900 shadow-xl h-40"
              to={`/courses?category=${category}`}
            >
              <div className=" p-2 bg-gray-800 rounded-full">
                <span
                  className="text-3xl flex justify-center rounded-full p-4 bg-gray-900/80  shadow-xl shadow-green-900/25 group-hover:animate-jumpping2"
                  style={{
                    boxShadow: `0px 0px 15px -3px ${colorIcons?.[i]?.color}`,
                    color: colorIcons?.[i]?.color,
                  }}
                >
                  {categoryIcons(i)}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
                {category}
              </h3>
            </Link>
          ))}
          <Link className="group flex flex-col justify-center items-center text-center rounded-xl border border-gray-800 bg-gray-900 shadow-xl h-40 hover:border-green-900/80 transition-all duration-300">
            {/* <div className=" p-2 bg-gray-800 rounded-full">
              <span
                className="text-3xl flex justify-center rounded-full p-4 bg-gray-900/80  shadow-xl shadow-green-900/25 group-hover:animate-jumpping2"
                style={{
                  boxShadow: `0px 0px 15px -3px gray}`,
                }}
              ></span>
            </div> */}
            <div className="p-1 bg-gray-800/40 rounded-xl group-hover:bg-green-900/40 transition-all duration-200">
              <h3 className="text-lg font-semibold text-white sm:text-xl bg-gray-900 p-3 px-4 rounded-xl">
                All Categories
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
