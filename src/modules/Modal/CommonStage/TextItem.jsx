import React from 'react'
import styles from './CommonStyle.module.css'
export default function TextItem({ title, value, percentage, hr }) {
    return (
        <>
            <div class={styles.TextLine}>
                <h6>{title}:</h6>
                {value &&
                    <p>{value} DEVE
                        {percentage && <span>(~$ {percentage})</span>
                        }
                    </p>

                }
            </div>
            {hr&&
                <hr/>
            }
        </>
    )
}
