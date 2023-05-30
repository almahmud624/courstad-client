import Banner from "../../components/Banner/Banner";
import CourseSection from "../../components/CourseSection/CourseSection";
import { LearnFun } from "../../components/LearnFun/LearnFun";
import { TeacherSection } from "../../components/TeacherSection/TeacherSection";
import { HowCourseWork } from "../../components/HowCourseWork/HowCourseWork";
import { ElevateSkills } from "../../components/ElevateSkills/ElevateSkills";
import { CourseCategory } from "../../components/CourseCategory/CourseCategory";
import { UpcomingEvents } from "../../components/UpcomingEvents/UpcomingEvents";
import { HappyStudents } from "../../components/HappyStudents/HappyStudents";

const Home = () => {
  return (
    <>
      <Banner />
      <CourseCategory />
      <CourseSection />
      <HowCourseWork />
      <ElevateSkills />
      <UpcomingEvents />
      <TeacherSection />
      <HappyStudents />
      <LearnFun />
    </>
  );
};

export default Home;
