import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import NextButton from "./NextButton";
import TextItem from "./TextItem";
const StarterModal = ({ handleStep }) => {
  return (
    <>
      <div>
        <ModalHeaderText header="Your Wallet" caption="DEVE Balance In Your Wallet" />
        <TextItem 
        title="DEVE Balance"
        value="500"
        percentage=""
        hr="true"
        />
        <NextButton handleStep={()=>handleStep("options")}/>
        {/* <button onClick={() => handleStep("options")}>Next</button> */}
      </div>
    </>
  );
};

export default StarterModal;
