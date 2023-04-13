import React from "react";
import Banner from "../../components/Banner/Banner";
import CourseSection from "../../components/CourseSection/CourseSection";
import { TeacherSection } from "../../components/TeacherSection";
import { LearnFun } from "../../components/LearnFun/LearnFun";

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
