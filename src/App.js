import Home from "./modules/Home/Home";
import NotFound from "./modules/NotFound";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkTree from "./modules/LinkTree/LinkTree";
import { Helmet } from "react-helmet";
const App = () => {
  return (
    <>
      <Helmet>
        <title>Develocity Solutions | Blockchain, NFT, Gaming, Mobile Apps & SaaS Solutions</title>
        <meta
          name="description"
          content="Explore Develocity.solutions for cutting-edge blockchain, NFT, NFT gaming, mobile app, and SaaS development services. Elevate your business with our innovative, secure, and user-friendly digital solutions."
        />
        <meta
          name="keywords"
          content="blockchain development, NFT marketplace, NFT gaming, mobile app development, SaaS development, digital transformation, Develocity Ssolutions, decentralized technology, non-fungible tokens, innovative solutions"
        />
      </Helmet>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/links" element={<LinkTree />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <div>
       <Toaster
         position="top-center"
         reverseOrder={false}
       />
     <Home />
     </div> */}
    </>
  );
};

export default App;
