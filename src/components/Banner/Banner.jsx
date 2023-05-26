import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../Assets/banner.png";
import logo from "../../Assets/logo.png";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const Banner = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    const x =
      e.clientX - heroRef.current.offsetLeft - heroRef.current.offsetWidth / 2;
    const y =
      e.clientY - heroRef.current.offsetTop - heroRef.current.offsetHeight / 2;
    setPosition({ x: x / 20, y: y / 20 });
  };

  useEffect(() => {
    heroRef.current.addEventListener("mousemove", handleMouseMove);
    // return () => {
    //   heroRef.current.removeEventListener("mousemove", handleMouseMove);
    // };
  }, []);
  return (
    <>
      <div
        className="bg-gradient-to-t dark:from-gray-800 dark:via-teal-800 dark:to-green-900 from-white  to-green-800"
        ref={heroRef}
      >
        <section className="max-w-screen-xl px-4 md:px-8 pt-10 md:pt-0 mx-auto">
          <div className="flex flex-wrap justify-between">
            <svg
              width="223"
              height="272"
              viewBox="0 0 223 272"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0"
            >
              <path
                d="M1 11.0378C15 5.37117 49.6 -3.46216 76 6.53784C109 19.0378 106.5 62.0378 81.5 91.0378C56.5 120.038 43 138.038 49 166.538C55 195.038 94 189.038 122.5 152.538C151 116.038 191.5 107.038 211.5 138.538C231.5 170.038 216.5 199.038 196 209.538C175.5 220.038 144 198.538 162.5 176.538C181 154.538 213 183.538 202 213.038C191 242.538 158.5 255.038 152 270.538"
                stroke="#135840"
                stroke-width="2"
              ></path>
            </svg>
            <Slide left>
              <div className="w-full lg:w-1/2 text-start flex flex-col justify-center mb-6 sm:mb-12 lg:mb-0">
                <h1 className="dark:text-gray-200 text-gray-800 text-4xl sm:text-5xl md:text-6xl font-bold  mb-4 md:mb-8">
                  Enabling Is What <br></br>We Do
                </h1>

                <p className="max-w-md text-start text-gray-800 dark:text-gray-300 xl:text-md  leading-relxed">
                  You Too Can Have A Information Like Mine.Work Hard, Learn
                  Harder
                </p>
                <div className="flex mt-8">
                  <Link
                    className="group relative inline-block focus:outline-none focus:ring"
                    to="/courses"
                  >
                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-700 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

                    <span className="relative inline-block border-2 text-green-100 border-green-500 rounded px-8 py-3 text-md font-semibold tracking-widest capitalize">
                      all courses
                    </span>
                  </Link>
                </div>
              </div>
            </Slide>

            <div className="w-full lg:w-1/2 flex justify-center mb-12 md:mb-16 !relative">
              <div className="relative z-10 top-12 bottom-0 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                <div class="flex flex-col absolute top-5 -left-14">
                  <div class="relative animate-jumpping">
                    <img className="w-12 -rotate-90" src={logo} alt="" />
                  </div>
                </div>

                <Fade big>
                  <img
                    src={banner}
                    loading="lazy"
                    alt=""
                    className="w-full h-full object-cover object-center z-5"
                  />
                </Fade>
                <div
                  style={{
                    position: "absolute",
                    bottom: `calc(100% - ${position.y}px)`,
                    left: `calc(50% + ${position.x}px)`,
                  }}
                >
                  <h2 className="bg-gradient-to-l dark:from-gray-600  dark:to-green-700 from-white  to-green-800 w-64 text-center p-1 py-2 font-semibold capitalize shadow-lg shadow-green-900 rounded text-lg text-gray-200 border-r-4 border-yellow-600">
                    expand your knowledge
                  </h2>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: `calc(80% - ${position.y}px)`,
                    right: `calc(100% + ${position.x}px)`,
                  }}
                >
                  <h2 className="bg-gradient-to-r dark:from-gray-600  dark:to-green-700 from-white  to-green-800 w-64 text-center p-1 py-2 font-semibold capitalize shadow-lg shadow-green-900 rounded text-lg text-gray-200 border-l-4 border-yellow-600">
                    unlock you potential
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
