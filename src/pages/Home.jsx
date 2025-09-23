import Landing from "../components/Landing";
import Courses from "../components/Courses";
import Itcourses from "../components/Itcourses";
import ContactWidget from "../components/ContactWidget";
import Mentors from "./Mentors";
import MainPage from "../components/MainPage";




function Home() {
  return (
    <div>
      <Landing />
      <MainPage/>
      <Mentors/>
      <Courses/>
      <Itcourses/>
     <ContactWidget/>
    </div>
  );
}

export default Home;
