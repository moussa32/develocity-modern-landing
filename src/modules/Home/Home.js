<<<<<<< HEAD
import Footer from "../../shared/components/Footer/Footer";
import Featured from "./Featured";
import Invest from "./Invest";

const Home = () => {
  return (
    <>
      <Featured />
      <Invest />
      <Footer />
    </>
  );
=======
import { Partnering } from "../Partnering/Partnering";
import { LatestNews } from "../LatestNews/LatestNews";
import { Roadmap } from "../Roadmap/Roadmap";

const Home = () => {
  return <div>
    <Partnering />
    <LatestNews />
    <Roadmap />
  </div>;
>>>>>>> 5abd98d987688abba12d88bc49fa31d63972ab9c
};

export default Home;
