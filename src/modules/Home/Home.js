import Footer from "../../shared/components/Footer/Footer";
import Featured from "./Featured";
import Invest from "./Invest";
import { Partnering } from "../Partnering/Partnering";
import { LatestNews } from "../LatestNews/LatestNews";
import { Roadmap } from "../Roadmap/Roadmap";
// import { Roadmap } from "../Roadmap/Roadmap";
import Navbar from "../../shared/components/Navbar/Navbar";
import ContactInfo from "./ContactInfo";
import MainContent from "./MainContent";
import OurTeam from "./OurTeam";

const Home = () => {
  return (
    <>
     {/* <Navbar/>
     <MainContent/>
      <Featured />
      <Invest /> */}
      <Partnering />
      <LatestNews />
      <Roadmap />
      <OurTeam/>
      <ContactInfo/>
      <Footer />
    </>
  );
};

export default Home;