import { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import FinalModal from "./CommonStage/FinalModal";
import WalletInfoModal from "./GlobalStage/WalletInfoModal";
import BuywithModal from "./BuyStage/BuywithModal";
import ClaimModal from "./ClaimStage/ClaimModal";
import styles from "./Modal.module.css";
import SelectNetwork from "./GlobalStage/SelectNetwork";
import SelectOption from "./GlobalStage/SelectOption";
import BuyAmountModal from "./BuyStage/BuyAmountModal";
import ReferralsModal from "./Referrals/ReferralsModal";

// const steps = {
//   global: ["starter", "selectWallet", "walletInfo", "options"],
//   buy: ["buywith", "buyamount", "final"],
//   claim: ["claim", "final"],
//   referral: ["referral", "final"],
// };

const ModalBuyNow = ({ open, onClose, handleOpen }) => {
  const [currentStep, setCurrentStep] = useState("starter");
  const [walletAddress, setwalletAddress] = useState("");

  const handleStep = useCallback((step) => {
    setCurrentStep(step);
  }, []);

  const handleRenderComponentStep = () => {
    switch (currentStep) {
      case "starter":
        return <SelectNetwork handleStep={handleStep} handleWalletAddress={setwalletAddress} handleOpen={handleOpen} />;
      case "walletInfo":
        return <WalletInfoModal handleStep={handleStep} walletAddress={walletAddress} handleOpen={handleOpen} />;
      case "options":
        return <SelectOption handleStep={handleStep} />;
      case "buywith":
        return <BuywithModal handleStep={handleStep} />;
      case "buyamount":
        return <BuyAmountModal handleStep={handleStep} walletAddress={walletAddress} />;
      case "claim":
        return <ClaimModal handleStep={handleStep} />;
      case "referral":
        return <ReferralsModal handleStep={handleStep} />;
      case "final":
        return <FinalModal onClose={onClose} handleStep={handleStep} />;
      default:
        return <SelectNetwork handleStep={handleStep} />;
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
