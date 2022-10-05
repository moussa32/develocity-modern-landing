import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import NextButton from "../CommonStage/NextButton";
import TextItem from "../CommonStage/TextItem";
import styles from "../CommonStage/CommonStyle.module.css";

const WalletInfoModal = ({ handleStep, walletAddress, disconnect, deveBalance, referralsToClaim ,handleCurrent}) => {
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
            handleStep={() => { 
              handleStep("options");
              handleCurrent()
            }
          }
            text="Next &#8594;"
            stylesButton={{ bg: "#0D162A" , marginTop:'70px'}}
            disabled={false}
          />
        </div>
      </div>
    </>
  );
};

export default WalletInfoModal;
