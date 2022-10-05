import React from 'react'
import styles from './CommonStyle.module.css'
import { useTranslation } from 'react-i18next';

export default function TextFloatRight({balanceValue}) {
  const { t } = useTranslation();

  return (
    <div className={styles.balanceText}>
       {t("homeSection.modal.buyWithModal.btns.binanceCoin.balance")} {balanceValue} 
        
        </div>
  )
}
