import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const CourseDataContext = createContext();
const CourseData = ({ children }) => {
  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    fetch("https://courstad-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCoursesData(data));
  }, []);
  if (coursesData.length < 1) {
    return;
  }
  const dataInfo = { coursesData };
  return (
    <CourseDataContext.Provider value={dataInfo}>
      {children}
    </CourseDataContext.Provider>
  );
};

export default CourseData;
