import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UpcomingEvents";
import Slider from "react-slick";

const events = [
  {
    title: "Women's Basketball at National Indoor Court",
    image:
      "https://img.freepik.com/free-photo/group-young-people-sitting-conference-together-while-raising-their-hands-ask-question-business-team-meeting-seminar-training-concept_58466-12403.jpg?w=740&t=st=1684233876~exp=1684234476~hmac=8a60e8e30ff110d0aae0149233a93f7930f73d0325306864319081ef1234e957",
    date: "Aug 12, 2020",
    time: "4:00 AM - 6:00AM",
    location: "New Orleans, LA",
  },
  {
    title: "Women's Basketball at National Indoor Court",
    image:
      "https://img.freepik.com/free-photo/cheerful-mood-group-people-business-conference-modern-classroom-daytime_146671-16287.jpg?w=740&t=st=1684234124~exp=1684234724~hmac=8955710dcf22f386a5843f2d6bbdf2ebeda1fc6740d081f1a2acfb1a6583df72",
    date: "Aug 12, 2020",
    time: "4:00 AM - 6:00AM",
    location: "New Orleans, LA",
  },
  {
    title: "Women's Basketball at National Indoor Court",
    image:
      "https://img.freepik.com/free-photo/female-business-executive-giving-speech_107420-63798.jpg?w=740&t=st=1684234189~exp=1684234789~hmac=79c9c6e2e364c96e294560bf6c9bdacdc29818d2f03d8898fee55af74b688911",
    date: "Aug 12, 2020",
    time: "4:00 AM - 6:00AM",
    location: "New Orleans, LA",
  },
];
export const UpcomingEvents = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2500,
    vertical: true,
    verticalSwiping: true,
  };
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
          <div className="w-[25%] h-[500px]  overflow-hidden relative justify-self-center">
            <div className="bg-gradient-to-b dark:from-gray-800 dark:to-transparent  absolute top-0 w-full h-16 z-50"></div>
            <div className="bg-gradient-to-t dark:from-gray-800 dark:to-transparent  absolute bottom-0 w-full h-20 z-50"></div>
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <Slider {...settings}>
              {events?.map(({ title, image, date, time, location }, i) => (
                <center
                  class={`group rounded-lg border border-gray-500 relative cursor-pointer !w-full`}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full absolute top-0 object-cover"
                  />
                  <div className="bg-gradient-to-t dark:from-gray-800/75 dark:to-green-900/25 !h-80 backdrop-brightness-50 overflow-hidden">
                    <div className="absolute -bottom-[75px] group-hover:bottom-0 p-4 transition-all duration-300">
                      <p class="text-gray-200 font-semibold text-2xl delay-50 duration-500  rounded-lg my-3 group-hover:text-left transition-all">
                        {title}
                      </p>
                      <div className="flex justify-between text-gray-400 mb-2">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="inline-block" />
                          <span>{date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaClock className="inline-block" />
                          <span>{time}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-gray-400">
                        <IoLocationSharp className="inline-block" />
                        <span>{location}</span>
                      </div>
                    </div>
                  </div>
                </center>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
