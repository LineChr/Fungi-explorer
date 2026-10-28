"use client";
import styles from "./CardDetail.module.css"
import { useRouter } from "next/navigation"
import Image from "next/image"

export type SpecieDetailImages = {
    index: number;
    source_url: string;
}

export type SpecieDetails = {
    common_name: string;
    scientific_name: string;
    description: string;
    habitat: string;
    safety_notes: string;
    season: string;
    regions: string[];
    images: SpecieDetailImages[];
}

function getImageUrl(imageUrl: string) {
    if (imageUrl.includes("commons.wikimedia.org/wiki/File:")) {
        const filename = decodeURIComponent(imageUrl.split("/wiki/File:")[1]);

        return `https://commons.wikimedia.org/wiki/Special:FilePath/${filename}`;
    }

    return imageUrl;
}

export default function CardDetails({ details } : {details: SpecieDetails}) {
    const router = useRouter();

    return(
        <main className={styles.cardDetailContainer}>
            <button onClick={() => router.back()}>🠔 back</button>

            <div className={styles.nameContainer}>
                <h1>{details.common_name}</h1>
                <h2>{details.scientific_name}</h2>
            </div>

            <section className={styles.leftSection}>
                <div>
                    <h3>description</h3>
                    <p>{details.description}</p>
                </div>

                <div>
                    <h3>habitat</h3>
                    <p>{details.habitat}</p>
                </div>

                <div>
                    <h3>safety notes</h3>
                    <p>{details.safety_notes}</p>
                </div>
            </section>

            <section className={styles.rightSection}>
                <Image src={getImageUrl(details.images[0].source_url)} width={300} height={300} alt=""/>
                <div className={styles.regionsContainer}>
                    <h3>regions</h3>
                    <ul>{details.regions.map((region) =>
                    <li key={region}>{region}</li>)}</ul>
                </div>

                <div className={styles.seasonContainer}>
                    <h3>season</h3>
                    <p>{details.season}</p>
                </div>
            </section>
        </main>
    )
}