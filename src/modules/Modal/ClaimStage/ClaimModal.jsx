import React from 'react'
import image from '../../../assets/images/develocityicon.png';
import { ModalHeaderText } from '../ModalHeader/ModalHeaderText';
import TextItem from '../CommonStage/TextItem';
import NextButton from '../CommonStage/NextButton';
import styles from '../CommonStage/CommonStyle.module.css'
import { useTranslation } from "react-i18next";

export default function ClaimModal({handleStep, handleCurrent}) {
  const { t } = useTranslation();

  return (
    <>
    <div>
        <div className={styles.claimImgwrapper}>
            <img src={image} alt={t("homeSection.modal.claimModal.mainText")} />
        </div>
        <div>
        <ModalHeaderText header={t("homeSection.modal.claimModal.mainText")} caption={t("homeSection.modal.claimModal.subText")} />

        </div>
        <TextItem 
        title={t("homeSection.modal.claimModal.DEVEBalance")}
        value="500"
        percentage="500"
        hr="true"
        />
            <TextItem 
        title={t("homeSection.modal.claimModal.tokensToClaim")}
        value="500"
        percentage="500"
        hr=""
        />
          <div className={styles.nextButtonContainer}>
                    <NextButton
                        text={t("homeSection.modal.claimModal.claimBtn")}
                        stylesButton={{ bg: "#9C3FE5" , marginTop:'170px'}}
                        disabled={true}
                        handleStep={() => { 
                        handleStep("final");
                        handleCurrent()
                      
                      }
                        }
                        />
                </div>
    </div>

    </>
  )
}

