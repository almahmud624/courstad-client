import React from "react";
import Banner from "../../components/Banner/Banner";
import CourseSection from "../../components/CourseSection/CourseSection";
import { LearnFun } from "../../components/LearnFun/LearnFun";
import { TeacherSection } from "../../components/TeacherSection/TeacherSection";

const Home = () => {
  return (
    <>
      <Banner />
      <CourseSection />
      <LearnFun />
      <TeacherSection />
    </>
  );
};

export default Home;
