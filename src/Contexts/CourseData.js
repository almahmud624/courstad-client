import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const CourseDataContext = createContext();
const CourseData = ({ children }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://courstad-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <CourseDataContext.Provider value={{ courses }}>
      {children}
    </CourseDataContext.Provider>
  );
};

export default CourseData;
