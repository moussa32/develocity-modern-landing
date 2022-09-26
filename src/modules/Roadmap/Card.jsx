import styles from './Roadmap.module.css'

export function Card({ header, details }) {
    return (
        <>
            <div className={`shadow card ${styles.cardContent}`}>
                <h3 className={`text-center`}>{header}</h3>
                <ul>
                    {details.map((el, index) => (
                        <li key={index} >{el}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}