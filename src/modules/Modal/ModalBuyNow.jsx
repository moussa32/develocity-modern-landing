import { useEffect, useCallback, useState } from "react";
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
import contractAbi from "../../assets/contractABI.json";
import toast, { Toaster } from "react-hot-toast";
import { ethers } from "ethers";
// const steps = {
//   global: ["starter", "selectWallet", "walletInfo", "options"],
//   buy: ["buywith", "buyamount", "final"],
//   claim: ["claim", "final"],
//   referral: ["referral", "final"],
// };

const ModalBuyNow = ({ open, onClose, handleOpen }) => {
  const [currentStep, setCurrentStep] = useState("starter");
  const [walletAddress, setwalletAddress] = useState("");
  const [firstCoin, setFirstCoin] = useState(0);
  const [secondCoin, setSecondCoin] = useState(0);
  const [selectedCurrency, setSelectedCurreny] = useState({ name: "", image: "", ticker: "", balance: "" });
  const [deveBalance, setDeveBalance] = useState({ amount: 0, value: 0 });
  const [tokensToClaim, setTokensToClaim] = useState({ amount: 0, value: 0 });
  const [referralsToClaim, setReferralsToClaim] = useState(0);

  useEffect(() => {
    const getBalance = async () => {
      const deveCost = 0.3;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let walletInfoContractAddress = "0xc1ec20ef71c47004616a7c82ce0dd6a60fbe897c";
      const walletInfoContract = new ethers.Contract(walletInfoContractAddress, contractAbi, provider);

      //Fetch deve balance
      const DEVEBalance = Number(
        ethers.utils.formatEther(await walletInfoContract._contributions(walletAddress))
      ).toFixed(0);

      const DEVEBalanceValue = (DEVEBalance * deveCost).toFixed(2);
      setDeveBalance({ amount: DEVEBalance, value: DEVEBalanceValue });

      //Fetch Tokens to claim
      const tokensToClaim = Number(ethers.utils.formatEther(await walletInfoContract.getRefPer(walletAddress))).toFixed(
        0
      );
      setTokensToClaim({ amount: tokensToClaim, value: tokensToClaim });

      //Fetch Referrals to claim
      const referralsToClaim = Number(
        ethers.utils.formatEther(await walletInfoContract._RefAmount(walletAddress))
      ).toFixed(0);
      setReferralsToClaim(referralsToClaim);

      // Methods =>  _contributions(address) - getRefPer(address) _RefAmount [0.3]
      console.log(referralsToClaim);
    };
    getBalance();
  }, []);
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
            deveBalance={deveBalance}
            tokensToClaim={tokensToClaim}
            referralsToClaim={referralsToClaim}
            handleStep={handleStep}
            walletAddress={walletAddress}
            disconnect={handleDisconnectWeb3Modal}
          />
        );
      case "options":
        return <SelectOption deveBalance={deveBalance} handleStep={handleStep} />;
      case "buywith":
        return (
          <BuywithModal
            handleStep={handleStep}
            walletAddress={walletAddress}
            handleBinanceCoin={setFirstCoin}
            binanceBalance={firstCoin}
            handleBinanceUSD={setSecondCoin}
            binanceUSDBalance={secondCoin}
            handleSelectCurrency={setSelectedCurreny}
          />
        );
      case "buyamount":
        return (
          <BuyAmountModal
            handleStep={handleStep}
            walletAddress={walletAddress}
            disconnect={handleDisconnectWeb3Modal}
            currentCurrency={selectedCurrency}
          />
        );
      case "claim":
        return <ClaimModal handleStep={handleStep} />;
      case "referral":
        return <ReferralsModal handleStep={handleStep} walletAddress={walletAddress} />;
      case "final":
        return <FinalModal onClose={onClose} handleStep={handleStep} />;
      default:
        return <SelectNetwork handleStep={handleStep} />;
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
        <div>{handleRenderComponentStep()}</div>
      </div>
    </>,
    document.getElementById("modal-buyNow-btn")
  );
};

export default ModalBuyNow;
