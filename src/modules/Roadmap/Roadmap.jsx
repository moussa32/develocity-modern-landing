import styles from './Roadmap.module.css'
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
            <div className={`container ${styles.roadmapWrapper}`}>
                <div className={`text-center  ${styles.header}`}>
                    <h3>Roadmap to Building</h3>
                    <h3 >Most Secure Eco-System</h3>
                </div>
                <div className={`d-flex justify-content-between  ${styles.roadmapCards}`}>
                    {
                        cardInfo.map((el, index) => (
                            <div className={` ${styles.cardBox}`}>
                                <Card
                                    header={el.header}
                                    key={index}
                                    details={el.details}

                                />
                                <div className='  w-100 '>
                                    <div className='d-flex  justify-content-center '>
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


            </div>
            <div className={`w-100 d-flex  ${styles.line_hr} `}>
                <div className={`col-2 ${styles.step} `}></div>
                <div className={`  ${styles.step}`}></div>
                <div className={` bg-transparent ${styles.step}`}></div>
                <div></div>
            </div>
        </>
    )
}

