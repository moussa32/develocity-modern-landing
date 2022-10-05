import ButtonItem from "../CommonStage/ButtonItem";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import BuyIcon from "../../../assets/images/BuyDEVE.svg";
import ClaimTokenIcon from "../../../assets/images/ClaimTokenIcon.svg";
import ReferralsIcon from "../../../assets/images/ReferralsIcon.svg";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const SelectOption = ({ handleStep, deveBalance ,handleCurrent}) => {
  const { t } = useTranslation();

  const [selectedStep, setSelectedStep] = useState("");

  const updateStep = (nextStep) => {
    handleStep(nextStep);
    handleCurrent()

  };

  return (
    <div>
      <ModalHeaderText header={t("homeSection.modal.optionsModal.mainText")} caption={t("homeSection.modal.optionsModal.subText")} />
      <div className="d-flex flex-column gap-4 w-100">
        <div onClick={() => updateStep("buywith")}>
          <ButtonItem
            mainText={t("homeSection.modal.optionsModal.btns.buyDEVE")} 
            image={BuyIcon}
            selected={selectedStep}
            handleSelect={setSelectedStep}
            disabled={false}
          />
        </div>
        <div onClick={() => deveBalance.amount >= 50 && updateStep("claim")}>
          <ButtonItem
            mainText={t("homeSection.modal.optionsModal.btns.claimYourTokens")} 
            image={ClaimTokenIcon}
            selected={selectedStep}
            handleSelect={setSelectedStep}
            disabled={true}
          />
        </div>
        <div onClick={() => deveBalance.amount >= 50 && updateStep("referral")}>
          <ButtonItem
            mainText={t("homeSection.modal.optionsModal.btns.referrals")}
            image={ReferralsIcon}
            selected={selectedStep}
            handleSelect={setSelectedStep}
            disabled={deveBalance.amount <= 50 ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
