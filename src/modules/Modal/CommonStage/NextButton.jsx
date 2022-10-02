import React from 'react'
import styles from './CommonStyle.module.css'
export default function NextButton({ handleStep, text, stylesButton, disabled }) {

    return (
        <div className={styles["btn-next-container"]}>
            <button type="button" className={`${styles.nextBtn} ${disabled ? styles.disabledBtn : ''}`} onClick={handleStep} style={{ backgroundColor: stylesButton?.bg }}
                disabled={disabled}>{text} &#8594;</button>
        </div>
    )
}


