import Landing from "../components/Landing";
import Courses from "../components/Courses";
import Services from "../components/Services";
import Itcourses from "../components/Itcourses";
import ContactWidget from "../components/ContactWidget";
import Mentors from "./Mentors";




function Home() {
  return (
    <div>
      <Landing />
      <Itcourses/>
      <Courses/>
      <Services/>
     <Mentors/>
     <ContactWidget/>
  
    </div>
  );
}

export default Home;
