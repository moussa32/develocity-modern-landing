import { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import StarterModal from "./CommonStage/StarterModal";
import OptionsModal from "./CommonStage/OptionsModal";
import FinalModal from "./CommonStage/FinalModal";
import AmountModal from "./BuyStage/AmountModal";
import styles from "./Modal.module.css";

// const steps = {
//   global: ["starter", "options"],
//   buy: ["amount", "buywith", "buyamount", "final"],
//   claim: ["claim", "final"],
//   referral: ["referral", "final"],
// };

const ModalBuyNow = ({ open, onClose }) => {
  const [currentStep, setCurrentStep] = useState("starter");

  const handleStep = useCallback((step) => {
    setCurrentStep(step);
  }, []);

  const handleRenderComponentStep = () => {
    switch (currentStep) {
      case "starter":
        return <StarterModal handleStep={handleStep} />;
      case "options":
        return <OptionsModal handleStep={handleStep} />;
      case "amount":
        return <AmountModal handleStep={handleStep} />;
      // case "buywith":
      //   return <StarterModal />;
      // case "buyamount":
      //   return <OptionsModal />;
      // case "claim":
      //   return <OptionsModal />;
      // case "referral":
      //   return <StarterModal />;
      case "final":
        return <FinalModal />;
        default:
          return <StarterModal handleStep={handleStep} />;
    }
   
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className={styles.backDrop} onClick={onClose} />

      <div className={` ${styles.overlay}`}>
        <button className={styles.closeBtn_ltr} onClick={onClose}>
          close
        </button>
        <div>{handleRenderComponentStep()}</div>
      </div>
    </>,
    document.getElementById("modal-buyNow-btn")
  );
};

export default ModalBuyNow;
