import { Link } from "react-router-dom";

const content = [
  {
    title: "Pass on Your Wisdom and Teach the Next Generation",
    image:
      "https://img.freepik.com/free-photo/student-online-cute-young-guy-studying-computer-glasses-green-shirt-with-cup-happy_140725-164742.jpg?w=740&t=st=1683958683~exp=1683959283~hmac=5a40f1c7a0ce9b3591f439bafffa8def5c58d944973e92b07043a6183e0c811a",
    buttonText: "More Info",
  },
  {
    title: "Let Us Show You How Fun Learning Can Be",
    image:
      "https://img.freepik.com/free-photo/front-view-smiley-girl-wearing-headphones_23-2149455149.jpg?w=740&t=st=1683972867~exp=1683973467~hmac=f108763e407b7d7ee4fe1631df00188f28964eecc5f8f8aa7b00ebe15e6fb982",
    buttonText: "Start From Today",
  },
];

export const LearnFun = () => {
  return (
    <>
      <section className="dark:bg-gray-800 bg-white pt-8 sm:pt-14 md:pb-0 pb-14">
        <div className="">
          <h1 className="text-center text-3xl md:text-5xl font-semibold dark:text-gray-200 text-gray-800 mb-5 md:mb-0">
            Which One is Suitable For You?
          </h1>
        </div>
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 grid lg:grid-cols-2 gap-5 h-80">
          {content?.map(({ title, image, buttonText }, i) => (
            <div key={i} className="flex relative w-full md:h-52 h-40">
              <div
                className={`dark:bg-gray-900/75 w-full h-full transform transition-all absolute rounded-lg ${
                  i % 2 === 0
                    ? "origin-top-left rotate-2"
                    : "origin-top-right -rotate-2"
                }`}
              ></div>
              <div className="bg-gray-900 flex flex-row-reverse justify-center items-center transform transition-all absolute rounded-lg w-full h-full px-2 shadow-lg shadow-green-900/25">
                <div className="md:w-1/2 w-72">
                  <img
                    src={image}
                    alt=""
                    className="object-cover w-full lg:h-full rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-center px-2 dark:text-gray-200 lg:w-7/12">
                  <h5 className="mb-3 text-lg md:text-2xl font-semibold">
                    {title}
                  </h5>

                  <div className="flex items-center">
                    <div className="flex mt-2 justify-center">
                      <Link
                        className="group relative inline-block focus:outline-none focus:ring"
                        to="/courses"
                      >
                        <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-700 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

                        <span className="relative inline-block border-2 text-green-100 border-green-500 rounded md:px-4 px-3 md:py-2 py-1.5 text-sm font-semibold tracking-widest capitalize">
                          {buttonText}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
