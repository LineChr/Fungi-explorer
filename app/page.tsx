import styles from "./page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>fungi explorer</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      <Link href="/overview" className={styles.button}>overview</Link>
    </div>
  );
}
