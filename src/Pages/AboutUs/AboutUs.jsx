export const AboutUs = () => {
  return (
    <>
      <div className="bg-gray-800 py-24 sm:py-32 relative">
        <div className="mx-auto flex max-w-7xl px-6 justify-evenly bg-gray-900 items-center gap-20 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="1240"
            height="560"
            preserveAspectRatio="none"
            viewBox="0 0 1240 560"
            className="absolute left-0 bottom-0"
          >
            <g mask='url("#SvgjsMask1075")' fill="none">
              <path
                d="M-105.05 247.53C28.55 255.25 166.12 487.44 367.21 499.53 568.3 511.62 535.85 627.19 603.34 631.57"
                stroke="rgba(31, 41, 55, 1)"
                stroke-width="2"
              ></path>
              <path
                d="M-84.43 392.6C6.53 392.93 94.1 462.6 272.63 462.6 451.16 462.6 447.02 391.72 629.69 392.6 812.36 393.48 881.66 608.28 986.75 617.38"
                stroke="rgba(31, 41, 55, 1)"
                stroke-width="2"
              ></path>
              <path
                d="M-38.84 421.57C133.25 417.69 359.8 179.91 606.2 180.77 852.6 181.63 803.67 560.91 928.72 609.26"
                stroke="rgba(31, 41, 55, 1)"
                stroke-width="2"
              ></path>
              <path
                d="M-3.83 191.15C81.53 188.71 126.29 46.2 312.55 62.35 498.8 78.5 494.02 515.94 628.92 589.69"
                stroke="rgba(31, 41, 55, 1)"
                stroke-width="2"
              ></path>
              <path
                d="M-195.66 200.42C-86.07 205.3-27.33 375.36 199.66 390.82 426.65 406.28 477.2 639.76 594.98 651.1"
                stroke="rgba(31, 41, 55, 1)"
                stroke-width="2"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1075">
                <rect width="1240" height="560" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
          <div className="w-[40%] relative">
            <h2 className="mb-3 text-3xl md:text-5xl font-semibold leading-none sm:text-4xl text-gray-100">
              Upcoming Educational Events
            </h2>
            <p className="my-5 dark:text-gray-400 text-gray-800">
              <span className="font-base text-sm md:text-base">
                A teacher who truly cares about their students and their success
                can make all the difference in the world. They have the ability
                to connect with their students, understand their unique
                strengths and weaknesses and provide the guidance and support
                needed for them to reach their full potential.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
