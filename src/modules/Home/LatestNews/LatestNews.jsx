import styles from './LatestNews.module.css'
import image1 from './../../../assets/images/newsImage1.png'
import image2 from './../../../assets/images/newsImage2.png'
// import image3 from './../../../assets/images/newsImage3.png'
import { useTranslation } from 'react-i18next';
const newsCard = [
    {
        image: image1,
        header: "Develocity Finance Technologies partnering with Xite Solutions.",
        /*caption: "Get on Board Now!",*/
        date: "September 3, 2022"
    },
    {
        image: image2,
        header: 'It’s not just a search engine for crypto but also a new way to invest your time and earn money.',
        /*caption: "Get on Board Now!",*/
        date: "July 1, 2022"
    },
    /*{
        image: image3,
        header: 'We are Launching Deve',
        caption: "Get on Board Now!",
        date: "September 19, 2022"
    },*/

]
export function LatestNews() {
    const { t } = useTranslation();
    return (
        <>
        <div className={`direction ${ styles.newsWrapper}`}> 
                <h3 className={`container ${styles.news_header}`}><span>{t("newsSection.mainText")}</span></h3>

            <div className={`container ${styles.newsBody}`}>
                <div className="d-flex justify-content-center justify-content-md-between  align-items-center flex-column flex-md-row">
                    <span className={`  ${styles.news_caption}`}>{t("newsSection.subText")}</span>
                    <button className={`d-none btn ${styles.btn_blog}`}>{t("newsSection.blogBtn")}</button>
                </div>

<section className={`${styles.cardContainer} `}> 
                <div className={`${styles.card_wrapper} `}>
                    {newsCard.map((el, index) => (
                        <div key={index} className={`card shadow ${styles.myCard}`}>
                            <div className={`${styles.cardImageContainer}`}>
                                <img src={el.image} alt="no" className='card-img-top' loading='lazy' />
                            </div>
                            <div className={`card-body ${styles.cardBody}`}>
                                <h5 className='text-secondary'>{el.header}</h5>
                                <h5 className='text-secondary'>{el.caption}</h5>
                                <span className='text-muted border rounded'>{el.date}</span>
                                <div className={` ${styles.readMore}`}>
                                    <button className={`d-none text-muted btn ${styles.btn_readmore}`}>{t("newsSection.readMore")}</button>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
                </section>
            </div>
            </div>
        </>
    )
}