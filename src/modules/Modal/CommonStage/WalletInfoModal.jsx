


import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import NextButton from "./NextButton";
import TextItem from "./TextItem";
import styles from './CommonStyle.module.css'

const WalletInfoModal = ({ handleStep }) => {
  return (
    <>
      <div>
        <ModalHeaderText header="Your Wallet" caption="DEVE Balance In Your Wallet" />
        <div>
          <span className={styles.walletText}>Wallet</span>
          <div className={styles.contractaddress}>
              <p>0xccccccccccccc</p>
              <button className="btn">&#9747;</button>
          </div>
        </div>
        <TextItem 
        title="DEVE Balance"
        value="500"
        percentage="500"
        hr="true"
        />
         <TextItem 
        title="Tokens To Claim:"
        value="250"
        percentage="250"
        hr="true"
        />
         <TextItem 
        title="Referrals To Claim"
        value="150"
        percentage=""
        hr=""
        />
        <div className={styles.nextButtonContainer}>
        <NextButton handleStep={()=>handleStep("options")}/>
        </div>
      </div>
    </>
  );
};

export default WalletInfoModal;

