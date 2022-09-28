import styles from './Roadmap.module.css';
import styleStepper from './StepLine.module.css'
import { Card } from './Card'
import check from '../../assets/images/check-circle.png'
const cardInfo = [
    {
        header: "Startup",
        details: ["Website Launching", "Project #1 Introduction", "Company Name Registration", "License & Legale Opinion"],
        icon: check,
        bgColor: '#5AD2FF'
    },
    {
        header: "Fair Launch",
        details: ['Publishing Tool "Beta Version"', "Start Pre-Sale", "Teaser Marketing Campaign", "Project #2 Introduction", "Promoting & Marketing", "Join Centralized Exchanges"],
        icon: check,
        bgColor: "#FFD13A"

    },
    {
        header: "Expansion",
        details: ['Publishing SWAP "Beta Version"', "Teaser Marketing Campaign", "Project #3 Introduction", "Promoting & Marketing", "NFT First Edition", " Join Centralized Exchanges"],
        icon: '',
        bgColor: "#71E581"

    },
    {
        header: "Opportunities",
        details: ['Publishing Bridge "Beta Version"', "Project #4 Introduction", "Teaser Marketing Campaign", "Promoting & Marketing", "Looking At The Opportunities"],
        icon: '',
        bgColor: "#EC92EC"

    },

]
export function Roadmap() {
    return (
        <>
            <div className={` ${styles.roadmapWrapper}`}>
                <div className={`text-center  ${styles.header}`}>
                    <h3>Roadmap to Building</h3>
                    <h3 >Most Secure Eco-System</h3>
                </div>
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
                            <div className={`d-flex  justify-content-between `}>
                                <span className={`  ${styleStepper.stepName}`}>Phase I</span>
                                <span className={` ${styleStepper.stepName}`}>Phase II</span>
                                <span className={`   ${styleStepper.stepName}`}>Phase III</span>
                                <span className={`  ${styleStepper.stepName}`}>Phase IV</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

