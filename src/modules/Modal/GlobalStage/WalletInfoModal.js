import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import NextButton from "../CommonStage/NextButton";
import TextItem from "../CommonStage/TextItem";
import styles from "../CommonStage/CommonStyle.module.css";
import { useTranslation } from 'react-i18next';

const WalletInfoModal = ({ handleStep, walletAddress, disconnect, deveBalance, referralsToClaim ,handleCurrent}) => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <ModalHeaderText header={t("homeSection.modal.walletInfoModal.mainText")} caption={t("homeSection.modal.walletInfoModal.subText")} />
        <div>
          <span className={styles.walletText}>{t("homeSection.modal.walletInfoModal.inputLable")}</span>
          <div className={styles.contractaddress}>
            <p>{walletAddress && walletAddress.slice(0, 10) + "..." + walletAddress.slice(31, 41)}</p>
            <button className="btn" onClick={() => disconnect()}>
              &#9747;
            </button>
          </div>
        </div>
        <TextItem title={t("homeSection.modal.walletInfoModal.deveBalance")} value={deveBalance.amount} percentage={deveBalance.value} hr="true" />
        <TextItem title={t("homeSection.modal.walletInfoModal.tokensToClaim")} value="1 DEVE" secondaryText="= $0.22" hr="true" />
        <TextItem title={t("homeSection.modal.walletInfoModal.referralsToClaim")} value={referralsToClaim} percentage="" hr="" />
        <div className={styles.nextButtonContainer}>
        <NextButton
            handleStep={() => { 
              handleStep("options");
              handleCurrent()
            }
          }
            text= {t("homeSection.modal.walletInfoModal.nextBtn")}
            stylesButton={{ bg: "#0D162A" , marginTop:'70px'}}
            disabled={false}
          />
        </div>
      </div>
    </>
  );
};

export default WalletInfoModal;
