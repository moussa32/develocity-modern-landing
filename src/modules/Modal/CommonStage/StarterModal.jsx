import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import NextButton from "./NextButton";
const StarterModal = ({ handleStep }) => {
  return (
    <>
      <div>
        <ModalHeaderText header="Your Wallet" caption="DEVE Balance In Your Wallet" />
        <h1>step1</h1>
        <NextButton handleStep={()=>handleStep("options")}/>
        {/* <button onClick={() => handleStep("options")}>Next</button> */}
      </div>
    </>
  );
};

export default StarterModal;
