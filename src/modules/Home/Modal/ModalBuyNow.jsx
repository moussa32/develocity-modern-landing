import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Step1 } from './CommonStage/Step1';
import { Step2 } from './CommonStage/Step2';

import styles from './Modal.module.css'

const SelectedCurrentStep=({currentStep, next})=>{
  
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
}

export function ModalBuyNow({ open, onClose }) {
    const [currentStep, setCurrentStep] = useState(1);

    const next = () => {
        setCurrentStep(currentStep + 1)
    }


    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <div className={styles.backDrop} onClick={onClose} />

            <div className={` ${styles.overlay}`}>
                <button className={styles.closeBtn_ltr} onClick={onClose}>close</button>
                <h1>modal</h1>
                <div>one:
                    <SelectedCurrentStep  currentStep={currentStep} next={next}/>
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
        document.getElementById('modal-buyNow-btn')

    )



}