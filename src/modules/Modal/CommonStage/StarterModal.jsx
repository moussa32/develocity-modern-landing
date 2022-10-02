import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import NextButton from "./NextButton";
import TextItem from "./TextItem";
import TextFloatRight from "./TextFloatRight";
import styles from './CommonStyle.module.css'

const StarterModal = ({ handleStep }) => {
  return (
    <>
      <div>
        <ModalHeaderText header="Buying With" caption="Select The Cryptocurrency You Want To Use" />
        <TextFloatRight  balanceValue="567.29"/>
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
        <NextButton text="Next" handleStep={()=>handleStep("options")}/>
        </div>
      </div>
    </>
  );
};

export default StarterModal;
