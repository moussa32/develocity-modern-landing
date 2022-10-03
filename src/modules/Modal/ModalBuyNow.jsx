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
import { web3Modal } from "../../shared/util/handleWeb3Modal";
import toast, { Toaster } from "react-hot-toast";

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

  const handleDisconnectWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    setwalletAddress("");
    handleOpen(false);
    handleStep("starter");
    window.localStorage.clear();
    /*Toast notification*/
    toast.success("Disconnected!", {
      style: {
        border: "1px solid #e30e27",
        padding: "16px",
        backgroundColor: "#ffcdd2",
        color: "white",
        width: "300px",
        borderRadius: "8px",
      },
      iconTheme: {
        primary: "#e30e27",
      },
    });
  };

  const handleRenderComponentStep = () => {
    switch (currentStep) {
      case "starter":
        return <SelectNetwork handleStep={handleStep} handleWalletAddress={setwalletAddress} handleOpen={handleOpen} />;
      case "walletInfo":
        return (
          <WalletInfoModal
            handleStep={handleStep}
            walletAddress={walletAddress}
            disconnect={handleDisconnectWeb3Modal}
          />
        );
      case "options":
        return <SelectOption handleStep={handleStep} />;
      case "buywith":
        return <BuywithModal handleStep={handleStep} walletAddress={walletAddress} />;
      case "buyamount":
        return (
          <BuyAmountModal
            handleStep={handleStep}
            walletAddress={walletAddress}
            disconnect={handleDisconnectWeb3Modal}
          />
        );
      case "claim":
        return <ClaimModal handleStep={handleStep} />;
      case "referral":
        return <ReferralsModal handleStep={handleStep}  walletAddress={walletAddress}/>;
      case "final":
        return <FinalModal onClose={onClose} handleStep={handleStep} />;
      default:
        return <SelectNetwork handleStep={handleStep} />;
    }
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className={styles.backDrop} onClick={()=>{
        handleStep("starter")
        onClose()
    }} />
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
