import React from "react";

const Teachers = ({ teacher }) => {
  const { courseTutor, teacherSkills, teacherThumb } = teacher;

  return (
    <div class="flex-shrink-0 relative overflow-hidden border border-green-800 rounded-lg max-w-xs shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="560"
        height="560"
        preserveAspectRatio="none"
        viewBox="0 0 560 560"
        class="absolute bottom-0 left-0 mb-8 w-full h-full"
        style={{ transform: "scale(1.5)", opacity: 1 }}
      >
        <g mask='url("#SvgjsMask1008")' fill="none">
          <rect width="560" height="560" x="0" y="0" fill="#1F2937"></rect>
          <path
            d="M0,252.536C45.155,240.189,66.16,189.534,105.626,164.357C145.293,139.052,204.005,144.101,230.702,105.358C257.887,65.907,248.018,12.711,242.952,-34.931C237.721,-84.125,233.36,-136.748,200.979,-174.149C168.593,-211.555,117.869,-226.789,69.187,-235.631C23.941,-243.849,-22.586,-239.462,-65.338,-222.521C-105.662,-206.542,-135.652,-174.918,-164.886,-142.875C-194.84,-110.043,-227.296,-77.427,-237.23,-34.109C-247.568,10.969,-234.964,56.807,-220.775,100.825C-205.024,149.686,-192.974,205.362,-150.664,234.437C-108.114,263.676,-49.8,266.153,0,252.536"
            fill="#13552f"
          ></path>
          <path
            d="M560 796.444C606.693 799.127 660.21 801.266 694.874 769.8679999999999 729.223 738.756 713.061 680.826 733.543 639.254 754.996 595.71 813.145 571.56 816.437 523.13 819.761 474.235 788.929 425.193 750.13 395.252 713.348 366.868 661.769 377.654 616.198 368.60699999999997 575.601 360.548 537.699 338.23400000000004 496.862 344.973 453.466 352.134 412.276 373.798 383.447 407.01599999999996 354.608 440.246 341.988 484.26099999999997 337.95500000000004 528.075 334.058 570.407 344.317 611.78 360.998 650.881 378.022 690.7860000000001 399.714 729.308 434.731 754.922 470.971 781.4300000000001 515.174 793.869 560 796.444"
            fill="#1d7f47"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1008">
            <rect width="560" height="560" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
      <div class="relative pt-3 px-10 flex items-center justify-center">
        <div
          class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: " rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: 0.2,
          }}
        ></div>
        <img
          class="relative w-20 h-20 rounded-full object-cover"
          src={teacherThumb}
          alt=""
        />
      </div>
      <div class="relative text-white px-6 pb-3 mt-6 text-center">
        <span class="block opacity-75 mb-1">{teacherSkills}</span>
        <span class="block font-semibold text-xl">{courseTutor}</span>
      </div>
    </div>
  );
};

export default Teachers;
