import { useCallback, useEffect, useState } from "react";
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
import toast from "react-hot-toast";
import { getWalletBalance } from "../../shared/util/handleContracts";
import { AnimatePresence, motion } from "framer-motion";
import { ethers } from "ethers";

// const steps = {
//   global: ["starter", "selectWallet", "walletInfo", "options"],
//   buy: ["buywith", "buyamount", "final"],
//   claim: ["claim", "final"],
//   referral: ["referral", "final"],
// };

const ModalBuyNow = ({ open, onClose, handleOpen, current, handleCurrent }) => {
  const [currentStep, setCurrentStep] = useState("starter");
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [userNetwork, setUserNetwork] = useState(null);
  const [walletAddress, setwalletAddress] = useState("");
  const [firstCoin, setFirstCoin] = useState(0);
  const [secondCoin, setSecondCoin] = useState(0);
  const [selectedCurrency, setSelectedCurreny] = useState({ name: "", image: "", ticker: "", balance: "" });
  const [deveBalance, setDeveBalance] = useState({ amount: 0, value: 0 });
  const [tokensToClaim, setTokensToClaim] = useState({ amount: 0, value: 0 });
  const [referralsToClaim, setReferralsToClaim] = useState(0);
  const [provider, setProvider] = useState(null);
  const [connection, setConnection] = useState(null);
  const [transAmount, setTransAmount] = useState(null);

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

  useEffect(() => {
    //When wallet address is chanched, it will fetch the new address's balance
    if (walletAddress) {
      const resetBalance = async () => {
        const {
          deveBalance: newDeveBalance,
          referralsToClaim: newReferralsToClaim,
          tokensToClaim: newTokensToClaim,
        } = await getWalletBalance(provider.getSigner(), walletAddress);
        if (newDeveBalance && newReferralsToClaim && newTokensToClaim) {
          setDeveBalance(newDeveBalance);
          setTokensToClaim(newTokensToClaim);
          setReferralsToClaim(newReferralsToClaim);
        }
      };
      resetBalance();
    }
  }, [walletAddress]);

  useEffect(() => {
    //When User is changed his wallet address it will get the new wallet address and refresh component
    if (connection) {
      const listenToAccountChanges = async () => {
        console.log(connection);

        connection.on("accountsChanged", (accounts) => {
          setwalletAddress(accounts[0]);
        });
      };
      listenToAccountChanges();
    }
  }, [connection]);

  const handleRenderComponentStep = () => {
    switch (currentStep) {
      case "starter":
        return (
          <SelectNetwork
            handleStep={handleStep}
            handleWalletAddress={setwalletAddress}
            handleOpen={handleOpen}
            handleProvider={setProvider}
            selectedNetwork={selectedNetwork}
            userNetwork={userNetwork}
            handleSelectedNetwork={setSelectedNetwork}
            handleUserNetwork={setUserNetwork}
            handleConnection={setConnection}
          />
        );
      case "walletInfo":
        return (
          <WalletInfoModal
            deveBalance={deveBalance}
            tokensToClaim={tokensToClaim}
            referralsToClaim={referralsToClaim}
            handleStep={handleStep}
            walletAddress={walletAddress}
            disconnect={handleDisconnectWeb3Modal}
            handleCurrent={handleCurrent}
          />
        );
      case "options":
        return <SelectOption deveBalance={deveBalance} handleStep={handleStep} handleCurrent={handleCurrent} />;
      case "buywith":
        return (
          <BuywithModal
            handleStep={handleStep}
            walletAddress={walletAddress}
            handleFirstCoin={setFirstCoin}
            firstCoin={firstCoin}
            handleSecondCoin={setSecondCoin}
            secondCoin={secondCoin}
            handleSelectCurrency={setSelectedCurreny}
            provider={provider}
            handleCurrent={handleCurrent}
            selectedNetwork={selectedNetwork}
          />
        );
      case "buyamount":
        return (
          <BuyAmountModal
            handleStep={handleStep}
            walletAddress={walletAddress}
            disconnect={handleDisconnectWeb3Modal}
            currentCurrency={selectedCurrency}
            provider={provider}
            handleFinalAmount={setTransAmount}
            handleCurrent={handleCurrent}
            selectedNetwork={selectedNetwork}
          />
        );
      case "claim":
        return <ClaimModal handleStep={handleStep} handleCurrent={handleCurrent} />;
      case "referral":
        return (
          <ReferralsModal
            handleStep={handleStep}
            walletAddress={walletAddress}
            tokensToClaim={tokensToClaim.amount}
            referralsToClaim={referralsToClaim}
            handleCurrent={handleCurrent}
          />
        );
      case "final":
        return (
          <FinalModal
            onClose={onClose}
            handleStep={handleStep}
            boughtAmount={transAmount}
            referral={referralsToClaim}
            handleCurrent={handleCurrent}
          />
        );
      default:
        return <SelectNetwork handleStep={handleStep} handleCurrent={handleCurrent} />;
    }
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div
        className={styles.backDrop}
        onClick={() => {
          handleStep("starter");
          onClose();
        }}
      />
      <div className={` ${styles.overlay}`}>
        {/* <button className={styles.closeBtn_ltr} onClick={onClose}>
          close
        </button> */}
        <AnimatePresence mode="wait">
          <motion.div
            className="item"
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring" }}
            key={current}
          >
            <div>{handleRenderComponentStep()}</div>
          </motion.div>
        </AnimatePresence>
        {/* <div>{handleRenderComponentStep()}</div> */}
      </div>
    </>,
    document.getElementById("modal-buyNow-btn")
  );
};

export default ModalBuyNow;
