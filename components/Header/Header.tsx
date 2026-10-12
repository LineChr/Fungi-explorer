import Link from "next/link"
import styles from "./Header.module.css"


export default function Header() {
    return(
        <header className={styles.headerContainer}>
            <nav>
                <Link href="/">home</Link>
                <Link href="/overview">overview</Link>
                <Link href="/about">about</Link>
            </nav>
        </header>
    )
}