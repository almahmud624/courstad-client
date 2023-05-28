const faq = [
  {
    question: "What is distance education?",
    answer:
      "Colleges offer only undergraduate degrees while universities offer graduate degrees as well, but the terms are often used interchangeably.",
  },
  {
    question: "What do I need to know about mobile?",
    answer:
      "Colleges offer only undergraduate degrees while universities offer graduate degrees as well, but the terms are often used interchangeably.",
  },
  {
    question: "Can you work while studying in the United States?",
    answer:
      "Colleges offer only undergraduate degrees while universities offer graduate degrees as well, but the terms are often used interchangeably.",
  },
  {
    question: "Can you work while studying in the United States?",
    answer:
      "Colleges offer only undergraduate degrees while universities offer graduate degrees as well, but the terms are often used interchangeably.",
  },
];

const FrequentlyQuestion = () => {
  return (
    <>
      <div className="bg-gradient-to-b dark:from-gray-800 dark:via-teal-800 dark:to-green-900 from-white  to-green-800  relative pt-5 z-10">
        <div className="mx-auto flex max-w-7xl px-6 justify-evenly items-center gap-20 rounded-lg lg:py-16">
          <div className="lg:w-[50%] w-full relative text-center">
            <h2 className="mb-3 text-3xl md:text-5xl font-semibold leading-none sm:text-4xl text-gray-100">
              Get Your Answers
            </h2>
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
      <div className="bg-gray-800 pb-5 sm:pb-5 pt-10 sm:pt-10 bg-gradient-to-t dark:from-gray-800 dark:to-green-900 from-white to-green-800 relative">
        <div className="mx-auto max-w-7xl flex lg:flex-row flex-col px-6 lg:px-8 justify-evenly gap-10">
          <div className="space-y-4 flex-1">
            {faq?.map(({ question, answer }, i) => (
              <details
                key={i}
                className=" p-6 py-3 border-l-4 border-green-500 bg-teal-800 group transition-all duration-300 rounded"
                close="true"
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h5 className="text-lg font-medium text-gray-200">
                    {question}
                  </h5>

                  <span className="flex-shrink-0 ml-1.5 p-1 text-green-500 bg-[#174530] rounded-full sm:p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-300">{answer}</p>
              </details>
            ))}
          </div>
          <div className="space-y-4 flex-1">
            {faq?.map(({ question, answer }, i) => (
              <details
                key={i}
                className=" p-6 py-3 border-l-4 border-green-500 bg-teal-800 group transition-all duration-300 rounded"
                close
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h5 className="text-lg font-medium text-gray-200">
                    {question}
                  </h5>

                  <span className="flex-shrink-0 ml-1.5 p-1 text-green-500 bg-[#174530] rounded-full sm:p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-300">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentlyQuestion;
