import { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import StarterModal from "./CommonStage/StarterModal";
import OptionsModal from "./CommonStage/OptionsModal";
import FinalModal from "./CommonStage/FinalModal";
import AmountModal from "./BuyStage/AmountModal";
import WalletInfoModal from "./CommonStage/WalletInfoModal";
import BuywithModal from "./BuyStage/BuywithModal";
import ClaimModal from "./ClaimStage/ClaimModal";
import styles from "./Modal.module.css";
import SelectNetwork from "./GlobalStage/SelectNetwork";

// const steps = {
//   global: ["starter", "selectWallet", "walletInfo", "options"],
//   buy: ["buywith", "buyamount", "final"],
//   claim: ["claim", "final"],
//   referral: ["referral", "final"],
// };

const ModalBuyNow = ({ open, onClose }) => {
  const [currentStep, setCurrentStep] = useState("starter");
  const [network, setNetwork] = useState("");

  const handleStep = useCallback((step) => {
    setCurrentStep(step);
  }, []);

  const handleRenderComponentStep = () => {
    switch (currentStep) {
      case "starter":
        return <SelectNetwork handleStep={handleStep} handleNetwork={setNetwork} />;
      case "options":
        return <OptionsModal handleStep={handleStep} />;
      case "amount":
        return <AmountModal handleStep={handleStep} />;
        case "walletInfo":
          return <WalletInfoModal handleStep={handleStep}/>;
      case "buywith":
        return <BuywithModal handleStep={handleStep}/>;
      // case "buyamount":
      //   return <OptionsModal />;
      case "claim":
        return <ClaimModal handleStep={handleStep}/>;
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
