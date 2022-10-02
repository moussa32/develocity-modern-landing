import React from 'react'
import styles from './CommonStyle.module.css'
export default function NextButton({ handleStep , text}) {
    return (
        <>
            <button type="button" className={styles.nextBtn}  onClick={handleStep}>{text} &#8594;</button>
        </>
    )
}

// #nextBtn2{
//     width: 220px;
//     height: 54px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #fff;
//     background-color: #0D162A;
//     border-radius: 6px;
//     margin:20px auto 0;
//     font-size: 16px;
//   }
