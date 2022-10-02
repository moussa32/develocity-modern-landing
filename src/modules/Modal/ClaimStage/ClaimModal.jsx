import React from 'react'
import image from '../../../assets/images/develocityicon.png';
import { ModalHeaderText } from '../ModalHeader/ModalHeaderText';
import TextItem from '../CommonStage/TextItem';
import NextButton from '../CommonStage/NextButton';
import styles from '../CommonStage/CommonStyle.module.css'
export default function ClaimModal({handleStep}) {
  return (
    <>
    <div>
        <div className={styles.claimImgwrapper}>
            <img src={image} alt="Claims your token" />
        </div>
        <div>
        <ModalHeaderText header="Claim Your Tokens" caption="Claim Your Referrals Tokens" />

        </div>
        <TextItem 
        title="DEVE Balance"
        value="500"
        percentage="500"
        hr="true"
        />
            <TextItem 
        title="Tokens To Claim"
        value="500"
        percentage="500"
        hr=""
        />
         <div className={styles.nextButtonContainer}>
        <NextButton text="Next" handleStep={()=>handleStep("final")}/>
        </div>
    </div>

    </>
  )
}

