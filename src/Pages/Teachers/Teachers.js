import React from "react";

const Teachers = ({ teacher }) => {
  const { courseTutor, teacherSkills, teacherThumb } = teacher;

  return (
    <div className="w-10/12 m-auto md:w-full">
      <div className="flex flex-col items-center dark:bg-gray-700 bg-gray-100 rounded-lg">
        <div className="w-52 md:w-64 h-64 mt-8 dark:bg-gray-600 bg-gray-50 rounded-lg overflow-hidden shadow-lg mb-2 md:mb-4">
          <img
            src={teacherThumb}
            loading="lazy"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="px-8">
          <div className="text-gray-800 dark:text-gray-200 md:text-lg font-bold text-center">
            {courseTutor}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base text-center mb-3 md:mb-4">
            {teacherSkills}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
