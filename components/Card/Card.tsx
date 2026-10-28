import styles from "./Card.module.css"
import Image from "next/image";
import Link from "next/link";

export type SpecieImages = {
    url: string;
}

export type Specie = {
    mushroom_id: string;
    scientific_name: string;
    common_name: string;
    metadata_url: string;
    images: SpecieImages[];
}



export default function Card({specie, common_name}: {specie: Specie; common_name: string;}) {

    return(
        <Link href={`/species/${specie.mushroom_id}`} className={styles.cardLink}>
            <article className={styles.specieCard}>
                <Image src={specie.images[0].url} width={300} height={300} alt=""/>
                <div className={styles.specieNames}>
                    <h1>{common_name}</h1>
                    <h2>{specie.scientific_name}</h2>
                </div>
            </article>
        </Link>
    )
}