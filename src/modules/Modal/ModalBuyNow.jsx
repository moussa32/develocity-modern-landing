import ReactDOM from 'react-dom';
import styles from './Modal.module.css'

export function ModalBuyNow({ open, onClose }) {
    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <div className={styles.backDrop} />

            <div className={` ${styles.overlay}`}>
                <button className={styles.closeBtn_ltr} onClick={onClose}>close</button>
                <h1>modal</h1>

            </div>
        </>,
        document.getElementById('modal-buyNow-btn')

    )



}