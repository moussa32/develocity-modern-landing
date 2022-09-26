import Navbar from "../../shared/components/Navbar/Navbar";
import ContactInfo from "./ContactInfo";
import MainContent from "./MainContent";
import OurTeam from "./OurTeam";

const Home = () => {
  return (
  <div>
    <Navbar/>
    <MainContent/>
    <OurTeam/>
    <ContactInfo/>

  </div>
  );
};

export default Home;
