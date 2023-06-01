import { Player } from "@lottiefiles/react-lottie-player";
const content = [
  {
    title: "Enroll in the course",
    description:
      "Enrolling in our course is quick and easy. Simply visit our website and select the course you're interested in. You'll then be prompted to create an account or sign in if you already have one. Once you're signed in,you gain access to all the materials you need to succeed.",
    lottieLink: "https://assets7.lottiefiles.com/packages/lf20_8po4g2xf.json",
    color: "#0055DF",
  },
  {
    title: "Learn at your own pace",
    description:
      "Our self-paced courses allow you to learn at a speed that's comfortable for you. Whether you want to move quickly through the material or take your time to absorb every detail, we've designed our courses to fit your needs.",
    lottieLink: "https://assets7.lottiefiles.com/packages/lf20_wepuwkno.json",
    color: "#C8483A",
  },
  {
    title: "Complete assignments and quizzes",
    description:
      "As you progress through the course, you'll be given assignments and quizzes to test your knowledge. Complete them at your own pace and receive feedback on your progress.",
    lottieLink: "https://assets7.lottiefiles.com/packages/lf20_8autcbbt.json",
    color: "#21759B",
  },
  {
    title: "Earn your certificate",
    description:
      "Once you've completed all the course requirements, you'll receive a certificate of completion. Use it to demonstrate your new skills and knowledge to potential employers or colleagues.",
    lottieLink: "https://assets2.lottiefiles.com/packages/lf20_BqNwkkED33.json",
    color: "#15803D",
  },
];
export const HowCourseWork = () => {
  return (
    <>
      <section className="dark:bg-gray-800 bg-white py-14 overflow-hidden">
        <div className="">
          <h1 className="text-center text-3xl md:text-5xl font-semibold dark:text-gray-200 text-gray-800">
            How will the <span className=" ">course work?</span>
          </h1>
          <p className="text-center my-3 text-sm md:text-base md:my-5 dark:text-gray-400 text-gray-800 max-w-sm m-auto ">
            A Step-by-Step Guide to Course Success
          </p>
        </div>
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          {content?.map(({ title, description, lottieLink, color }, i) => (
            <div
              key={i}
              className="flex justify-center items-center flex-col max-w-screen-xl  lg:even:flex-row lg:flex-row-reverse sm:mx-auto my-7"
            >
              <div className="relative lg:w-1/2 ">
                <div className="p-2 flex justify-center items-center">
                  <Player
                    src={lottieLink}
                    className="player"
                    loop
                    autoplay
                    // speed={1}
                    style={{ height: "400px", width: "400px" }}
                  />
                </div>
              </div>
              <div
                className={`flex flex-col justify-center p-8  dark:from-gray-900 dark:to-gray-800 from-white  to-green-800 dark:text-gray-200 lg:p-16 lg:pl-10 lg:w-1/2 ${
                  i % 2 === 0
                    ? "bg-gradient-to-r border-l-2 rounded-l-lg"
                    : "bg-gradient-to-l border-r-2 rounded-r-lg"
                }`}
                style={{
                  borderColor: color,
                  boxShadow: `rgba(0, 0, 0, 0.35) 0px 25px 20px -20px,rgba(0, 0, 0, 0.35) 0px -25px 20px -20px`,
                }}
              >
                <div
                  className={`h-14 w-14 flex justify-center items-center mb-5`}
                  style={{
                    borderRadius: "30% 70% 70% 30% / 30% 56% 44% 70% ",
                    background: color,
                  }}
                >
                  <span className="text-2xl font-semibold">{i + 1}</span>
                </div>
                <h5 className="mb-3 text-2xl md:text-4xl font-semibold leading-none sm:text-4xl">
                  {title}
                </h5>
                <p className="mb-5 dark:text-gray-400 text-gray-800">
                  <span className="font-base text-sm md:text-base">
                    {description}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
