import styles from './Roadmap.module.css';
import styleStepper from './StepLine.module.css'
import { Card } from './Card'
import check from '../../assets/images/check-circle.png'
import { useTranslation } from 'react-i18next';

export function Roadmap() {
    const { t } = useTranslation();

    const cardInfo = [
        {
            header: `${t("roadmapSection.cards.startup.mainText")}`,
            details: [`${t("roadmapSection.cards.startup.subText.0")}`, `${t("roadmapSection.cards.startup.subText.1")}`, `${t("roadmapSection.cards.startup.subText.2")}`, `${t("roadmapSection.cards.startup.subText.3")}`],
            icon: check,
            bgColor: '#5AD2FF'
        },
        {
            header: `${t("roadmapSection.cards.launch.mainText")}`,
            details: [`${t("roadmapSection.cards.launch.subText.0")}`, `${t("roadmapSection.cards.launch.subText.1")}`, `${t("roadmapSection.cards.launch.subText.2")}`, `${t("roadmapSection.cards.launch.subText.3")}`, `${t("roadmapSection.cards.launch.subText.4")}`, `${t("roadmapSection.cards.launch.subText.5")}`],
            icon: check,
            bgColor: "#FFD13A"
    
        },
        {
            header: `${t("roadmapSection.cards.expansion.mainText")}`,
            details: [`${t("roadmapSection.cards.expansion.subText.0")}`, `${t("roadmapSection.cards.expansion.subText.1")}`, `${t("roadmapSection.cards.expansion.subText.2")}`, `${t("roadmapSection.cards.expansion.subText.3")}`, `${t("roadmapSection.cards.expansion.subText.4")}`, `${t("roadmapSection.cards.expansion.subText.5")}`],
            icon: '',
            bgColor: "#71E581"
    
        },
        {
            header: `${t("roadmapSection.cards.opportunities.mainText")}`,
            details: [`${t("roadmapSection.cards.opportunities.subText.0")}`, `${t("roadmapSection.cards.opportunities.subText.1")}`, `${t("roadmapSection.cards.opportunities.subText.2")}`, `${t("roadmapSection.cards.opportunities.subText.3")}`, `${t("roadmapSection.cards.opportunities.subText.4")}`],
            icon: '',
            bgColor: "#EC92EC"
    
        },
    
    ]
    return (
        <>
            <div className={` ${styles.roadmapWrapper}`}>
                <div className={`text-center  ${styles.header}`}>
                    <h3>{t("roadmapSection.mainText")}</h3>
                    <h3 >{t("roadmapSection.mainTextSubstring")}</h3>
                </div>
                <div className={`${styles.roadmapscroll}`}>
                    <section className={` ${styles.roadmapContent}`}>
                        <div className={`d-flex justify-content-center justify-content-lg-between flex-wrap flex-md-nowrap  container ${styles.roadmapCards}`}>
                            {
                                cardInfo.map((el, index) => (
                                    <div className={`  ${styles.cardBox}`}>
                                        <div className={`${styles.cardContainer}`}>
                                            <div className={`${styles.stepperMobile}`}></div>
                                            <Card
                                                header={el.header}
                                                key={index}
                                                details={el.details}

                                            />

                                        </div>
                                        <div className='position-relative  w-100 '>
                                            <div className={` ${styles.Line_vr_Wrapper}`}>
                                                <span className={`d-inline-block text-center ${styles.line_vr}`} style={{ backgroundColor: el.bgColor }}></span>
                                            </div>
                                            <div className='d-flex  justify-content-center '>
                                                <span className={`d-inline-block text-center ${styles.circle}`} style={{ backgroundColor: el.bgColor }}>
                                                    {el.icon && <img src={el.icon} alt="status" />}
                                                </span>
                                            </div>

                                        </div>

                                    </div>
                                ))
                            }
                        </div>


                        <div className={`d-none d-md-block  ${styleStepper.stepwrapper}`}>
                            <div className={`d-flex  ${styleStepper.line_hr} `}>
                                <div className={`col-2 ${styleStepper.step} `}></div>
                                <div className={`  ${styleStepper.step}`}></div>
                                <div className={` bg-transparent ${styleStepper.step}`}></div>
                                <div></div>
                            </div>


                            <div className={`container position-relative h-100 `}>
                                <div className={`d-flex  justify-content-between ${styleStepper.stepperContainer}`}>
                                    <span className={`  ${styleStepper.stepName}`}>{t("roadmapSection.phases.0")}</span>
                                    <span className={` ${styleStepper.stepName}`}>{t("roadmapSection.phases.1")}</span>
                                    <span className={`   ${styleStepper.stepName}`}>{t("roadmapSection.phases.2")}</span>
                                    <span className={`  ${styleStepper.stepName}`}>{t("roadmapSection.phases.3")}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

