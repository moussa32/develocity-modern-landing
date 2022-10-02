import { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import FinalModal from "./CommonStage/FinalModal";
// import AmountModal from "./BuyStage/AmountModal";
import WalletInfoModal from "./GlobalStage/WalletInfoModal";
import BuywithModal from "./BuyStage/BuywithModal";
import ClaimModal from "./ClaimStage/ClaimModal";
import styles from "./Modal.module.css";
import SelectNetwork from "./GlobalStage/SelectNetwork";
import SelectOption from "./GlobalStage/SelectOption";

// const steps = {
//   global: ["starter", "selectWallet", "walletInfo", "options"],
//   buy: ["buywith", "buyamount", "final"],
//   claim: ["claim", "final"],
//   referral: ["referral", "final"],
// };

const ModalBuyNow = ({ open, onClose }) => {
  const [currentStep, setCurrentStep] = useState("claim");
  const [network, setNetwork] = useState("");
  console.log(currentStep);

  const handleStep = useCallback((step) => {
    setCurrentStep(step);
  }, []);

  const handleRenderComponentStep = () => {
    switch (currentStep) {
      case "starter":
        return <SelectNetwork handleStep={handleStep} handleNetwork={setNetwork} />;
      case "walletInfo":
        return <WalletInfoModal handleStep={handleStep} />;
      case "options":
        return <SelectOption handleStep={handleStep} />;
      // case "amount":
      //   return <AmountModal handleStep={handleStep} />;
      case "buywith":
        return <BuywithModal handleStep={handleStep} />;
      case "claim":
        return <ClaimModal handleStep={handleStep} />;
      // case "referral":
      //   return <StarterModal />;
      case "final":
        return <FinalModal />;
      default:
        return <SelectNetwork handleStep={handleStep} handleNetwork={setNetwork} />;
    }
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className={styles.backDrop} onClick={onClose} />
      <div className={` ${styles.overlay}`}>
        {/* <button className={styles.closeBtn_ltr} onClick={onClose}>
          close
        </button> */}
        <div>{handleRenderComponentStep()}</div>
      </div>
    </>,
    document.getElementById("modal-buyNow-btn")
  );
};

export default ModalBuyNow;
