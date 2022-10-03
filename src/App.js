import Home from "./modules/Home/Home";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Home />
    </div>
  );
};

export default App;
