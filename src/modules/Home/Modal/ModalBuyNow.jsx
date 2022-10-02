import { useState } from "react";
import ReactDOM from "react-dom";
import { Step1 } from "./CommonStage/Step1";
import { Step2 } from "./CommonStage/Step2";
import { Step3 } from "./BuyStage/Step3";
import { Step4 } from "./BuyStage/Step4";
import { Step5 } from "./BuyStage/Step5";
import { Step6 } from "./BuyStage/Step6";
import styles from "./Modal.module.css";

const steps = {
  global: ["starter", "options"],
  buy: ["amount", "buywith", "buyamount", "final"],
  claim: ["claim", "final"],
  referral: ["referral", "final"],
};

const SelectedCurrentStep = ({ currentStep, next }) => {
  switch (currentStep) {
    case 1:
      return <Step1 next={next} />;
    case 2:
      return <Step2 next={next} />;
    case 3:
      return <Step3 next={next} />;
    case 4:
      return <Step4 next={next} />;
    case 5:
      return <Step5 next={next} />;
    case 6:
      return <Step6 next={next} />;
    case 7:
      return <Step4 next={next} />;
    case 8:
      return <Step4 next={next} />;
    default:
      return <h1>bravoo</h1>;
  }
};

const ModalBuyNow = ({ open, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const next = (n) => {
    setCurrentStep(currentStep + n);
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className={styles.backDrop} onClick={onClose} />

      <div className={` ${styles.overlay}`}>
        <button className={styles.closeBtn_ltr} onClick={onClose}>
          close
        </button>
        <h1>modal</h1>
        <div>
          one:
          <SelectedCurrentStep currentStep={currentStep} next={next} />
          {/* 
                    {
                        (() => {


                            switch (currentStep) {
                                case 1:
                                    return (
                                        <Step1 next={next} />
                                    );
                                case 2: 
                                    return (
                                        <Step2 next={next} />
                                    );
                                default:
                                    return <h1>bravoo</h1>;
                            }

                        })()
                    } */}
        </div>
      </div>
    </>,
    document.getElementById("modal-buyNow-btn")
  );
};

export default ModalBuyNow;
