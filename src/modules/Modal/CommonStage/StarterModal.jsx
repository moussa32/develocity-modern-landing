import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
const StarterModal = ({ handleStep }) => {
  return (
    <>
      <div>
        <ModalHeaderText header="Your Wallet" caption="DEVE Balance In Your Wallet" />
        <h1>step1</h1>
        <button onClick={() => handleStep("options")}>Next</button>
      </div>
    </>
  );
};

export default StarterModal;
