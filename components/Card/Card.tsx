import styles from "./Card.module.css"
import Image from "next/image";

export type Specie = {
    mushroom_id: string;
    scientific_name: string;
    common_name: string;
    thumbnail_url: string;
}



export default function Card({specie}: {specie: Specie}) {

    return(
        <article key={specie.mushroom_id} className={styles.specieCard}>
            <Image src={specie.thumbnail_url} width={300} height={300} alt=""/>
            <div className={styles.specieNames}>
                <h1>{specie.common_name}</h1>
                <h2>{specie.scientific_name}</h2>
            </div>
        </article>
    )
}