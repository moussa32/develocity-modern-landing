import Home from "./modules/Home/Home";
import toast, { Toaster } from 'react-hot-toast';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LinkTree from "./modules/Home/LinkTree/LinkTree";
const App = () => {
  return (
    <BrowserRouter >
          <Routes >
            <Route exact path="/" element={<Home />} />
            <Route path="/links" element={<LinkTree />} />
            {/* <Route path='*' element={<NotFound/>}/> */}
          </Routes>

        </BrowserRouter>


    // <div>
    //   <Toaster
    //     position="top-center"
    //     reverseOrder={false}
    //   />
    //   <Home />
    // </div>
  );
};

export default App;
