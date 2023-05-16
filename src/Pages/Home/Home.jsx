import React from "react";
import Banner from "../../components/Banner/Banner";
import CourseSection from "../../components/CourseSection/CourseSection";
import { LearnFun } from "../../components/LearnFun/LearnFun";
import { TeacherSection } from "../../components/TeacherSection/TeacherSection";
import { HowCourseWork } from "../../components/HowCourseWork/HowCourseWork";
import { ElevateSkills } from "../../components/ElevateSkills/ElevateSkills";
import { CourseCategory } from "../../components/CourseCategory/CourseCategory";

const Home = () => {
  return (
    <>
      <Banner />
      <CourseCategory />
      <CourseSection />
      <HowCourseWork />
      <ElevateSkills />
      <LearnFun />
      <TeacherSection />
    </>
  );
};

export default Home;
