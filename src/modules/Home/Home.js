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
    <div id="home">
      <Navbar />
      <MainContent />
      <div id="about">
        <Featured />
      </div>
      <div id="scan-to-earn">
        <Invest />
      </div>
      <div id="partners">
        <Partnering />
      </div>
      <div id="news">
        <LatestNews />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <OurTeam />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Home;
