import React from 'react'
import styles from './CommonStyle.module.css'

export default function TextFloatRight({balanceValue}) {
  return (
    <div className={styles.balanceText}>
       Balance: {balanceValue} 
        
        </div>
  )
}
