import Footer from "../../shared/components/Footer/Footer";
import Featured from "./Featured";
import Invest from "./Invest";
import { Partnering } from "../Partnering/Partnering";
import { LatestNews } from "../LatestNews/LatestNews";
import { Roadmap } from "../Roadmap/Roadmap";

const Home = () => {
  return (
    <>
      <Featured />
      <Invest />
      <Partnering />
      <LatestNews />
      <Roadmap />
      <Footer />
    </>
  );
};

export default Home;
