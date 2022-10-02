import styles from './ModalHeaderText.module.css'

export function ModalHeaderText({header, caption}) {
    return (
        <>
            <div className={styles.headerModal}>
                <h2 className={styles.headerTitle}>{header}</h2>
                <span className={styles.captionText}>{caption}</span>
            </div>
        </>
    )
}

