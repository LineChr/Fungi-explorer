import styles from "./page.module.css"


export default function Loading() {
    return(
        <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>loading mushrooms...</p>
        </div>
    )
}