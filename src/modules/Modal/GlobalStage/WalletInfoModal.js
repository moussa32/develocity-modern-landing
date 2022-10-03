import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import NextButton from "../CommonStage/NextButton";
import TextItem from "../CommonStage/TextItem";
import styles from "../CommonStage/CommonStyle.module.css";
import { useEffect } from "react";
import { ethers } from "ethers";
import contractAbi from "../../../assets/contractABI.json";

const WalletInfoModal = ({
  handleStep,
  walletAddress,
  disconnect,
  handleDeveBalance,
  handleTokensClaim,
  handleReferralsToClaim,
  deveBalance,
  tokensToClaim,
  referralsToClaim,
}) => {
  useEffect(() => {
    const getBalance = async () => {
      const deveCost = 0.3;
      if (window.ethereum !== undefined) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const walletContract = new ethers.Contract("0xc1ec20ef71c47004616a7c82ce0dd6a60fbe897c", contractAbi, provider);

        //Fetch deve balance
        const DEVEBalance = Number(
          ethers.utils.formatEther(await walletContract._contributions(walletAddress))
        ).toFixed(0);

        const DEVEBalanceValue = (DEVEBalance * deveCost).toFixed(2);
        handleDeveBalance({ amount: DEVEBalance, value: DEVEBalanceValue });

        //Fetch Tokens to claim
        const tokensToClaim = Number(ethers.utils.formatEther(await walletContract.getRefPer(walletAddress))).toFixed(
          0
        );
        handleTokensClaim({ amount: tokensToClaim, value: tokensToClaim });

        //Fetch Referrals to claim
        const referralsToClaim = Number(
          ethers.utils.formatEther(await walletContract._RefAmount(walletAddress))
        ).toFixed(0);

        handleReferralsToClaim(referralsToClaim);
        // Methods =>  _contributions(address) - getRefPer(address) _RefAmount [0.3]
      }
    };
    getBalance();
  }, []);

  return (
    <>
      <div>
        <ModalHeaderText header="Your Wallet" caption="DEVE Balance In Your Wallet" />
        <div>
          <span className={styles.walletText}>Wallet</span>
          <div className={styles.contractaddress}>
            <p>{walletAddress && walletAddress.slice(0, 10) + "..." + walletAddress.slice(31, 41)}</p>
            <button className="btn" onClick={() => disconnect()}>
              &#9747;
            </button>
          </div>
        </div>
        <TextItem title="DEVE Balance" value={deveBalance.amount} percentage={deveBalance.value} hr="true" />
        <TextItem title="DEVE Price" value={tokensToClaim.amount} secondaryText="= $0.22" hr="true" />
        <TextItem title="Referrals To Claim" value={referralsToClaim} percentage="" hr="" />
        <div className={styles.nextButtonContainer}>
          <NextButton
            text="Next"
            stylesButton={{ bg: "#0D162A" }}
            handleStep={() => handleStep("options")}
            disabled={false}
          />
        </div>
      </div>
    </>
  );
};

export default WalletInfoModal;
