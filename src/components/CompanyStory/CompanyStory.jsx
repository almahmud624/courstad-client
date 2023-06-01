import { Player } from "@lottiefiles/react-lottie-player";
import numberLottie from "../../Assets/number-lottie.json";

const data = [
  {
    title: "Seamless Learning Experience",
    description:
      "At Courstad, we believe that learning should be accessible and enjoyable for everyone. Our platform offers a seamless learning experience, combining interactive course materials, engaging multimedia content, and intuitive user interfaces. Whether you're a student, a professional looking to upskill, or an enthusiast seeking personal growth, Courstad caters to diverse learning needs with a vast array of courses spanning various disciplines.",
  },
  {
    title: "Expert Instructors and Curated Content",
    description:
      "At Courstad, we understand that the quality of education depends on the expertise of instructors. That's why we have partnered with renowned educators, industry experts, and thought leaders to create courses that deliver exceptional knowledge and insights. Our instructors bring their real-world experience and expertise to the virtual classroom, providing learners with practical skills and a deep understanding of their subject matter.",
  },
  {
    title: "Personalized Learning Paths",
    description:
      "We recognize that every learner is unique, with different strengths, interests, and learning styles. Courstad's platform is designed to personalize the learning experience, allowing individuals to set their own pace and choose courses that align with their goals. Our intelligent recommendation system suggests relevant courses and learning paths, enabling learners to explore new subjects and continually expand their knowledge.",
  },
];

export const CompanyStory = () => {
  return (
    <>
      <div className="bg-gray-800 md:pb-10 pb-10">
        <div className="mx-auto flex lg:flex-row flex-col max-w-7xl gap-x-8 lg:gap-y-20 gap-y-10 px-6 lg:px-8">
          <div className="max-w-xl relative">
            <h2 className="mb-3 text-center text-3xl md:text-5xl font-semibold leading-none sm:text-3xl text-gray-100">
              Our Journey
            </h2>
            <p className="text-center my-3 text-sm md:text-base md:my-5 dark:text-gray-400 text-gray-800 max-w-sm m-auto ">
              One Year of Transforming Education and Empowering Minds
            </p>
            <div className="mx-auto flex items-center justify-center">
              <div
                className="w-full rounded-md bg-gradient-to-r from-red-700 via-green-500 to-green-700 p-1"
                style={{
                  borderRadius: "30% 70% 42% 58% / 30% 41% 59% 70% ",
                }}
              >
                <div
                  className="flex h-full w-full items-center justify-center bg-gray-900 back"
                  style={{
                    borderRadius: "30% 70% 42% 58% / 30% 41% 59% 70% ",
                  }}
                >
                  <Player
                    src={numberLottie}
                    className="player"
                    loop
                    autoplay
                    // speed={1}
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-7 w-full lg:px-10 px-0">
            {data?.map(({ title, description }, i) => (
              <div key={i} className="text-white">
                <h3 className="text-2xl text-gray-200 font-semibold mb-3">
                  {title}
                </h3>
                <span className="w-64 block h-[1px] bg-gradient-to-r from-gray-800 via-green-600 to-gray-800 mb-2"></span>
                <p className="text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
