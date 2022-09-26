import coinbaseImag from './../../assets/images/Coinbase.png'; 
import bitmexImag from './../../assets/images/bitmex.png';
import binanceImag from './../../assets/images/binance.png';
import styles from './Partnering.module.css'

export function Partnering(){
    return(
        <>
        <div className={`container ${styles.partneringWraper}`}>
            <h3 className={`text-center text-secondary`}>Partnering With</h3>
            <div className={`${styles.partnering_body} `}>
                    <div className=''><img src={coinbaseImag} alt="Coinbase" loading='lazy'/></div>
                    <div className=''><img src={bitmexImag} alt="bitmex" loading='lazy'/></div>
                    <div className=''><img src={binanceImag} alt="binance" loading='lazy'/></div>
            </div>
        </div>
        </>
    )
}