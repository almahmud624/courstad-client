import React from "react";
import Banner from "../../components/Banner/Banner";
import CourseSection from "../../components/CourseSection/CourseSection";
import { LearnFun } from "../../components/LearnFun/LearnFun";
import { TeacherSection } from "../../components/TeacherSection/TeacherSection";
import { HowCourseWork } from "../../components/HowCourseWork/HowCourseWork";

const Home = () => {
  return (
    <>
      <Banner />
      <CourseSection />
      <HowCourseWork />
      <LearnFun />
      <TeacherSection />
    </>
  );
};

export default Home;
