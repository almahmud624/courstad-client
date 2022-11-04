import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const CourseDataContext = createContext();
const CourseData = ({ children }) => {
  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/courses")
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
