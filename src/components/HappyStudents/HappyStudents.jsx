import worldMapSvg from "../../Assets/map.svg";
export const HappyStudents = () => {
  return (
    <>
      <div className="bg-gray-800 relative">
        <div className="mx-auto flex flex-col max-w-7xl px-6 justify-center items-center rounded-lg">
          <div className="bg-gray-800 shadow-xl w-72 h-32 flex justify-center items-center z-20 rounded-lg relative">
            <div className="flex flex-col space-y-5 justify-center items-center">
              <h2 className="md:text-3xl text-2xl font-semibold text-gray-200">
                <span className="text-[#C8483A] font-bold">Happy</span> Students
              </h2>
              <div className="flex -space-x-4">
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover"
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=740&t=st=1685027352~exp=1685027952~hmac=d6e1cf124079b3e9c29b12557f2e781868b3ebd1de8ff6c8d920565805f24b68"
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover"
                  src="https://img.freepik.com/free-photo/portrait-young-tender-woman-with-healthy-freckled-skin_158595-3947.jpg?w=740&t=st=1685027387~exp=1685027987~hmac=cd9a3ca411dded2e60300897b6e69ec4da1003a96342ec6f6884ae3424a67a7b"
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover"
                  src="https://img.freepik.com/free-photo/international-medical-student-man-blue-uniform-doctor-with-stethoscope_1157-43732.jpg?w=360&t=st=1685027403~exp=1685028003~hmac=a898a87068638e6b332628dd77603be9bb48b7e794b4650e4a2b9219202cb42e"
                  alt=""
                />
                <a
                  className="font-medium text-xl text-white ml-10  w-10 h-10 pl-10 flex justify-center items-center"
                  href="/"
                >
                  +99K
                </a>
              </div>
            </div>

            <svg
              viewBox="0 -2.5 21 21"
              version="1.1"
              fill="#000000"
              className="absolute md:-top-5 md:-left-7 top-0 left-0 md:h-20 w-10 md:w-20 h-10 animate-jumpping3"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-99.000000, -362.000000)"
                    fill="#C8483A"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M55.5929644,215.348992 C55.0175653,215.814817 54.2783665,216.071721 53.5108177,216.071721 C52.7443189,216.071721 52.0030201,215.815817 51.4045211,215.334997 C47.6308271,212.307129 45.2284309,210.70073 45.1034811,207.405962 C44.9722313,203.919267 48.9832249,202.644743 51.442321,205.509672 C51.9400202,206.088455 52.687619,206.420331 53.4940177,206.420331 C54.3077664,206.420331 55.0606152,206.084457 55.5593644,205.498676 C57.9649106,202.67973 62.083004,203.880281 61.8950543,207.507924 C61.7270546,210.734717 59.2322586,212.401094 55.5929644,215.348992 M53.9066671,204.31012 C53.8037672,204.431075 53.6483675,204.492052 53.4940177,204.492052 C53.342818,204.492052 53.1926682,204.433074 53.0918684,204.316118 C49.3717243,199.982739 42.8029348,202.140932 43.0045345,207.472937 C43.1651842,211.71635 46.3235792,213.819564 50.0426732,216.803448 C51.0370217,217.601149 52.2739197,218 53.5108177,218 C54.7508657,218 55.9898637,217.59915 56.9821122,216.795451 C60.6602563,213.815565 63.7787513,211.726346 63.991901,207.59889 C64.2754005,202.147929 57.6173611,199.958748 53.9066671,204.31012"
                        id="love-[#1F2937]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div className="w-full h-full md:-mt-20 -mt-8">
            <img src={worldMapSvg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
