import React from 'react'
import styles from './CommonStyle.module.css'
export default function TextItem({title, value, percentage}) {
  return (
    <>
        <div class={styles.TextLine}>
            <h6>{title}:</h6>
            <p>{value} DEVE <span>(~$ {percentage})</span></p>
          </div>
    </>
  )
}
