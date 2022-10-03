import ButtonItem from "../CommonStage/ButtonItem";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import BuyIcon from "../../../assets/images/BuyDEVE.svg";
import ClaimTokenIcon from "../../../assets/images/ClaimTokenIcon.svg";
import ReferralsIcon from "../../../assets/images/ReferralsIcon.svg";
import { useState } from "react";

const SelectOption = ({ handleStep ,deveBalance}) => {
  console.log(deveBalance ,'=============<<<');
  const [selectedStep, setSelectedStep] = useState("");
  const updateStep = (nextStep) => {
    handleStep(nextStep);
  };
  return (
    <div>
      <ModalHeaderText header="Select You Option" caption="What You Wanna Do" />
      <div className="d-flex flex-column gap-4 w-100">
        <div onClick={() => updateStep("buywith")}>
          <ButtonItem mainText="Buy DEVE" image={BuyIcon} selected={selectedStep} handleSelect={setSelectedStep}  disabled={false}/>
        </div>
        <div onClick={() => updateStep("claim")}>
          <ButtonItem
            mainText="Claim Your Tokens"
            image={ClaimTokenIcon}
            selected={selectedStep}
            handleSelect={setSelectedStep}
            disabled={true}
          />
        </div>
        <div onClick={() => updateStep("referral")}>
          <ButtonItem
            mainText="Referrals"
            image={ReferralsIcon}
            selected={selectedStep}
            handleSelect={setSelectedStep}
            disabled={deveBalance.amount <= 50 ?true:false}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
