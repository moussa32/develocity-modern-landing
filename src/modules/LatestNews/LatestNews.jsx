import styles from './LatestNews.module.css'
import image1 from './../../assets/images/newsImage1.png'
import image2 from './../../assets/images/newsImage2.png'
import image3 from './../../assets/images/newsImage3.png'
const newsCard = [
    {
        image: image1,
        header: 'We are Launching Deve',
        caption: "Get on Board Now!",
        date: "September 19, 2022"
    },
    {
        image: image2,
        header: 'We are Launching Deve',
        caption: "Get on Board Now!",
        date: "September 19, 2022"
    },
    {
        image: image3,
        header: 'We are Launching Deve',
        caption: "Get on Board Now!",
        date: "September 19, 2022"
    },

]
export function LatestNews() {
    return (
        <>
            <div className={`container ${styles.newsWrapper}`}>
                <h3 className={`${styles.news_header}`}>Latest News From Develocity</h3>
                <div className="d-flex justify-content-between align-items-center">
                    <span className={`  ${styles.news_caption}`}>Don't Miss Update From Develocity</span>
                    <button className={`btn fs-sm  ${styles.btn_blog}`}>CHECK OUR BLOG</button>
                </div>

                <div className={`${styles.card_wrapper} d-flex justify-content-between align-items-center flex-wrap`}>
                    {newsCard.map((el, index) => (
                        <div key={index} className={`card shadow ${styles.myCard}`}>
                            <div className={`${styles.cardImageContainer}`}>
                                <img  src={el.image} alt="no" className='card-img-top' loading='lazy'/>
                            </div>
                            <div className={`card-body ${styles.cardBody}`}>
                                <h5 className='text-secondary'>{el.header}</h5>
                                <h5 className='text-secondary'>{el.caption}</h5>
                                <span className='text-muted border rounded'>{el.date}</span>
                                <div className={` ${styles.readMore}`}>
                                <button className={`text-muted btn ${styles.btn_readmore}`}>READ MORE {`>`}</button>

                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

        </>
    )
}