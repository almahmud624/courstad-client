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
      <div className="bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto flex max-w-7xl justify-center items-center gap-20">
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
          <div className="w-[25%] h-[500px]  overflow-hidden relative">
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
