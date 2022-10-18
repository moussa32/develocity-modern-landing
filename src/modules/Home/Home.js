import Footer from "../../shared/components/Footer/Footer";
import Featured from "./Featured";
import Invest from "./Invest";
import { Partnering } from "./Partnering/Partnering";
import { LatestNews } from "./LatestNews/LatestNews";
import { Roadmap } from "./Roadmap/Roadmap";
// import { Roadmap } from "../Roadmap/Roadmap";
import Navbar from "../../shared/components/Navbar/Navbar";
import ContactInfo from "./ContactInfo";
import MainContent from "./MainContent";
import OurTeam from "./OurTeam";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);
  let RefWallet = urlParams.get("ref");
  if (RefWallet == null || RefWallet.length != 42 || !RefWallet.startsWith("0x")) {
    window.location.replace(`${window.location.origin}?ref=0x0000000000000000000000000000000000000000`);
  }

  return (
    <div id="home">
      <Navbar onClose={setIsOpen} />
      <MainContent isOpen={isOpen} setIsOpen={setIsOpen} />
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
