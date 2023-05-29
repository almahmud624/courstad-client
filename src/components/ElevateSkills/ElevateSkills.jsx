import { Link } from "react-router-dom";
import skillImg from "../../Assets/skill_women.jpg";
import { FcCheckmark } from "react-icons/fc";

const list = [
  {
    title: "Master the Latest Skills",
  },
  { title: "Equip Them with the Latest Tools" },
  {
    title: "Take Your Career to New Heights",
  },
];

export const ElevateSkills = () => {
  return (
    <>
      <section className={`dark:bg-gray-800 bg-white pt-10 relative`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="1240"
          height="560"
          preserveAspectRatio="none"
          viewBox="0 0 1240 560"
          className="absolute lg:block hidden"
        >
          <g mask='url("#SvgjsMask1067")' fill="none">
            <rect
              width="85"
              height="85"
              clipPath='url("#SvgjsClipPath1068")'
              x="14.77"
              y="86.07"
              fill="url(#SvgjsPattern1069)"
              transform="rotate(58.9, 57.27, 128.57)"
            ></rect>
            <path
              d="M630.25 268.73a5.6 5.6 0 1 0 8.61 7.17 5.6 5.6 0 1 0-8.61-7.17zM642.54 278.98a5.6 5.6 0 1 0 8.61 7.17 5.6 5.6 0 1 0-8.61-7.17zM654.83 289.22a5.6 5.6 0 1 0 8.61 7.17 5.6 5.6 0 1 0-8.61-7.17zM667.13 299.47a5.6 5.6 0 1 0 8.6 7.17 5.6 5.6 0 1 0-8.6-7.17zM595.43 260.54a5.6 5.6 0 1 0 8.6 7.17 5.6 5.6 0 1 0-8.6-7.17zM607.72 270.78a5.6 5.6 0 1 0 8.6 7.17 5.6 5.6 0 1 0-8.6-7.17zM620.01 281.02a5.6 5.6 0 1 0 8.6 7.18 5.6 5.6 0 1 0-8.6-7.18zM632.3 291.27a5.6 5.6 0 1 0 8.6 7.17 5.6 5.6 0 1 0-8.6-7.17zM560.6 252.34a5.6 5.6 0 1 0 8.61 7.17 5.6 5.6 0 1 0-8.61-7.17zM572.89 262.58a5.6 5.6 0 1 0 8.61 7.17 5.6 5.6 0 1 0-8.61-7.17zM585.18 272.83a5.6 5.6 0 1 0 8.61 7.17 5.6 5.6 0 1 0-8.61-7.17zM597.47 283.07a5.6 5.6 0 1 0 8.61 7.17 5.6 5.6 0 1 0-8.61-7.17z"
              stroke="#d3b714"
              strokeWidth="1"
              strokeDasharray="2, 2"
            ></path>
            <path
              d="M277.68 525.44 L382.47 545.97L402.8186064541665 462.9613935458336z"
              stroke="#d3b714"
              strokeWidth="1.56"
              strokeDasharray="4, 4"
            ></path>
            <path
              d="M583.0999999999999 392.27 L656.53 381.57L579.337980461388 346.44298046138806z"
              stroke="rgba(26, 136, 137, 1)"
              strokeWidth="2.42"
              strokeDasharray="3, 3"
            ></path>
            <circle
              r="84.16797226167093"
              cx="337.72"
              cy="173.24"
              stroke="#037b0b"
              strokeWidth="1"
              strokeDasharray="2, 2"
            ></circle>
            <path
              d="M760.96 62.92a5.6 5.6 0 1 0 6.98-8.76 5.6 5.6 0 1 0-6.98 8.76zM770.93 50.4a5.6 5.6 0 1 0 6.98-8.76 5.6 5.6 0 1 0-6.98 8.76zM780.9 37.89a5.6 5.6 0 1 0 6.98-8.76 5.6 5.6 0 1 0-6.98 8.76zM790.87 25.38a5.6 5.6 0 1 0 6.98-8.76 5.6 5.6 0 1 0-6.98 8.76z"
              fill="rgba(26, 136, 137, 1)"
            ></path>
            <path
              d="M341.15999999999997 205.45000000000002 L359.71999999999997 188.49L335.2678952731003 181.79789527310035z"
              fill="#037b0b"
            ></path>
            <circle
              r="49.663618314080466"
              cx="753.11"
              cy="491.04"
              stroke="#037b0b"
              strokeWidth="1"
              strokeDasharray="4, 4"
            ></circle>
            <path
              d="M713.04 565.57L718.6 554.03 731.08 556.92 736.64 545.39 749.11 548.28 754.67 536.74 767.15 539.63"
              stroke="#037b0b"
              strokeWidth="1"
              strokeDasharray="2, 2"
            ></path>
            <path
              d="M1077.46 120.31L1089.68 116.49 1096.09 127.57 1108.31 123.75 1114.73 134.83 1126.95 131.01 1133.36 142.1M1074.55 127.77L1086.77 123.94 1093.19 135.03 1105.41 131.2 1111.82 142.29 1124.04 138.47 1130.46 149.55"
              stroke="#037b0b"
              strokeWidth="1"
              strokeDasharray="4, 4"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1067">
              <rect width="1240" height="560" fill="#ffffff"></rect>
            </mask>
            <pattern
              x="0"
              y="0"
              width="8.5"
              height="8.5"
              patternUnits="userSpaceOnUse"
              id="SvgjsPattern1069"
            >
              <path
                d="M0 8.5L4.25 0L8.5 8.5"
                stroke="#d3b714"
                fill="none"
              ></path>
            </pattern>
            <clipPath id="SvgjsClipPath1068">
              <circle r="21.25" cx="57.27" cy="128.57"></circle>
            </clipPath>
          </defs>
        </svg>
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="flex flex-col justify-center max-w-screen-xl lg:flex-row sm:mx-auto gap-5">
            <div className="relative lg:w-1/2 w-full flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:w-9/12 w-full p-2 md:p-0">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://img.freepik.com/free-photo/freelancer-working-typing-laptop-keyboard-searching-information-internet-home-office-employee-writing-message-computer-copywriting-sitting-workplace-desk_482257-51089.jpg?w=740&t=st=1683947506~exp=1683948106~hmac=a58ddc98dddbab4f695bfb7f412f4ce7f5e01c2a3614e65937e808004b4a46c8"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://img.freepik.com/free-photo/top-view-school-supplies-tree-drawn-blackboard-education-day_23-2149241049.jpg?w=360&t=st=1683947631~exp=1683948231~hmac=446a6d9854bfd3e407e3094cc362289a3ab805e346024a140955cb0b5a803412"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://img.freepik.com/free-photo/young-man-studying-library-using-laptop_23-2149285400.jpg?w=360&t=st=1683947669~exp=1683948269~hmac=98825ec1710fb3a23240b88d72613fc44c814758cda399aabe1cb6ad3d1b9c0e"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={skillImg}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-2 md:p-8  dark:text-gray-200 lg:p-12 lg:pl-10 lg:w-1/2">
              <h5 className="mb-3 text-3xl md:text-5xl font-semibold leading-none sm:text-4xl">
                Elevate Your Skills with Courstad
              </h5>
              <p className="mb-5 dark:text-gray-400 text-gray-800">
                <span className="font-base text-sm md:text-base">
                  Unlock new career possibilities and take your professional
                  development to the next level with Courstad's cutting-edge
                  programs and unparalleled opportunities for growth. Our
                  comprehensive and flexible curriculum is designed to help you
                  acquire the skills, knowledge, and expertise you need to
                  succeed in today's rapidly evolving job market.
                </span>
              </p>
              <ul className="flex flex-col">
                {list?.map(({ title }, i) => (
                  <li
                    key={i}
                    className="inline-flex items-center gap-x-3.5 py-3 text-sm font-semibold bg-white text-gray-800 -mt-px dark:bg-gray-800 dark:text-white"
                  >
                    <FcCheckmark className="h-5 w-5" />
                    {title}
                  </li>
                ))}
              </ul>
              <div className="flex items-center">
                <div className="flex mt-5 justify-center">
                  <Link
                    className="group relative inline-block focus:outline-none focus:ring"
                    to="/about-us"
                  >
                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-700 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

                    <span className="relative inline-block border-2 text-green-100 border-green-500 rounded px-8 py-3 text-md font-semibold tracking-widest capitalize">
                      More About Us
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
