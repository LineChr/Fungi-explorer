import styles from "./page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>fungi explorer</h1>
      <p>Fungi comes in many different shapes, sizes and colours. Explore a variety of mushroom species and discover more about their appearance, natural habitats, characteristics, and growing conditions. Learn about their edibility, their potential toxicity, and other interesting facts that make each species unique!</p>
      <Link href="/overview" className={styles.button}>explore mushrooms</Link>
    </div>
  );
}
