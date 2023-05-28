import { FutureEducation } from "../../components/FutureEducation/FutureEducation";

export const AboutUs = () => {
  return (
    <>
      <div className="bg-gradient-to-b dark:from-gray-800 dark:via-teal-800 dark:to-green-900 from-white  to-green-800 relative pt-10 z-10">
        <div className="mx-auto flex max-w-7xl px-6 justify-evenly items-center gap-20 rounded-lg lg:py-24">
          <div className="lg:w-[50%] w-full relative text-center">
            <h2 className="mb-3 text-3xl md:text-5xl font-semibold leading-none sm:text-4xl text-gray-100">
              We share knowledge with the world
            </h2>
            <p className="my-5 dark:text-gray-400 text-gray-800">
              <span className="font-base text-sm md:text-base">
                Whether you want to learn or to share what you know, you’ve come
                to the right place. As a global destination for online learning,
                we connect people through knowledge.
              </span>
            </p>
          </div>
        </div>
        <div className="w-full h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="1440"
            height="560"
            preserveAspectRatio="none"
            viewBox="0 0 1440 560"
            className="absolute bottom-0 left-0 w-full h-full z-1"
          >
            <g mask='url("#SvgjsMask1048")' fill="none">
              <path
                d="M1464 560L0 560 L0 541.39Q47.38 468.77, 120 516.16Q146.48 422.64, 240 449.12Q287.44 424.56, 312 472Q411.16 499.16, 384 598.33Q369.32 463.65, 504 448.98Q557.45 430.44, 576 483.89Q649.83 437.72, 696 511.55Q781.49 477.04, 816 562.54Q860.46 487, 936 531.45Q983.53 458.98, 1056 506.51Q1162.12 492.63, 1176 598.75Q1177.55 528.3, 1248 529.85Q1259.94 469.8, 1320 481.74Q1364.86 454.6, 1392 499.45Q1474.97 510.42, 1464 593.39z"
                fill="#14532D"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1048">
                <rect width="1440" height="560" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
        </div>
      </div>
      <FutureEducation />
    </>
  );
};
