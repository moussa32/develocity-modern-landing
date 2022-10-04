import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import NextButton from "../CommonStage/NextButton";
import TextItem from "../CommonStage/TextItem";
import styles from "../CommonStage/CommonStyle.module.css";
import { useEffect } from "react";
import { ethers } from "ethers";
import contractAbi from "../../../assets/contractABI.json";
import { testNetContract } from "../../../shared/constants/contractAddress";
import { deveCost } from "../../../shared/constants/deveCost";

const WalletInfoModal = ({
  handleStep,
  walletAddress,
  disconnect,
  handleDeveBalance,
  handleTokensClaim,
  handleReferralsToClaim,
  deveBalance,
  referralsToClaim,
  provider,
}) => {
  useEffect(() => {
    const getBalance = async () => {
      const walletContract = new ethers.Contract(testNetContract, contractAbi, provider);

      //Fetch deve balance
      const DEVEBalance = (await walletContract._contributions(walletAddress)).toString();

      const DEVEBalanceValue = (DEVEBalance * deveCost).toFixed(2);
      handleDeveBalance({ amount: DEVEBalance, value: DEVEBalanceValue });

      //Fetch Tokens to claim
      const tokensToClaim = (await walletContract.getRefPer(walletAddress)).toString();
      handleTokensClaim({ amount: tokensToClaim, value: tokensToClaim });

      //Fetch Referrals to claim
      const referralsToClaim = (await walletContract._RefAmount(walletAddress)).toString();

      handleReferralsToClaim(referralsToClaim);
      // Methods =>  _contributions(address) - getRefPer(address) _RefAmount [0.3]
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
        <TextItem title="DEVE Price" value="1 DEVE" secondaryText="= $0.22" hr="true" />
        <TextItem title="Referrals To Claim" value={referralsToClaim} percentage="" hr="" />
        <div className={styles.nextButtonContainer}>
          <NextButton
            text="Next &#8594;"
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
