import React from 'react';
// import { GrShare } from "react-icons/gr";
import ShareIcon from './ShareIcon';
import styles from './LinkTree.module.css'
import logo from '../../assets/images/Deve-Logo.svg';
import LinkButton from './LinkButton';
import {
    FaPaperPlane,
    FaTwitter,
    FaFacebookF,
    FaTiktok,
} from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";

export default function LinkTree() {
    const shareLinksData=[
        {
            title:'Website',
            titleofshare:'Develocity token report',
            textofshare:'Check This Token',
            urlofshare:''

        },
        {
            title:'Scanner',
            titleofshare:'Develocity token report',
            textofshare:'Check This Token',
            urlofshare:''

        },
        {
            title:'How to Buy',
            titleofshare:'Develocity token report',
            textofshare:'Check This Token',
            urlofshare:''

        },
        {
            title:'Swap Tool',
            titleofshare:'Develocity token report',
            textofshare:'Check This Token',
            urlofshare:''

        },
        {
            title:'Changelog',
            titleofshare:'Develocity token report',
            textofshare:'Check This Token',
            urlofshare:''

        },
        {
            title:'Contact',
            titleofshare:'Develocity token report',
            textofshare:'Check This Token',
            urlofshare:''

        },

    ]
    const shareNavigator = (event,text, title, url) => {
        event.stopPropagation();
        if (navigator.share) {
            navigator.share({
                text: text,
                title: title,
                url: url
            }).catch(console.error);
        } else {
            alert("Your Browser not Support this Service")
        }
    }
    return (
        <>
          


        <div className={styles.treeWrapper}> 
            <div className={styles.treeContainer}>
                <div className={styles.shareWrapper}>
                    <span>Share</span>
                    <button className={styles['btn-share']}
                        onClick={() => shareNavigator('Check This Token', 'Develocity token report', window.location.href)}
                    >
                        <ShareIcon color='#8968E9' />
                    </button>

                </div>
                <div className={styles.info}>
                    <img src={logo} alt='logo' width={72} />
                    <h5>Develocity</h5>
                    <p>Develocity strives to create a safe and trustworthy crypto environment where investors and developers can interact securely, considering the transparent credibility and technical measures and standards.</p>
                    <div className={styles.iconWrapper}>
                        <a href='https://bscscan.com' className={styles.facebookIcon}>
                            <FaFacebookF />
                        </a>
                        <a href='https://bscscan.com' className={styles.youtubeIcon}>
                            <AiFillYoutube />
                        </a>
                        <a href='https://bscscan.com' className={styles.instgramIcon}>
                            <AiOutlineInstagram />
                        </a>
                        <a href='https://bscscan.com' className={styles.twitterIcon}>
                            <FaTwitter />
                        </a>
                        <a href='https://bscscan.com' className={styles.tiktokIcon}>
                            <FaTiktok />
                        </a>
                        <a href='https://bscscan.com' className={styles.telegramIcon}>
                            <FaPaperPlane />
                        </a>
                    </div>
                </div>
                <div className={styles.linksContainer}>
                    {
                        shareLinksData.map((item, index)=>(
                            <LinkButton
                            key={index}
                            title={item.title}
                            shareNavigator={shareNavigator}
                            titleofshare={item.titleofshare}
                            textofshare={item.textofshare}
                            urlofshare='' /> 
                        ))
                    }
                </div>

            </div>

         

            </div>
        </>
    )
}
