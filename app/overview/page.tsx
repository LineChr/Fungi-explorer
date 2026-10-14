import { notFound } from "next/navigation"
import styles from "./page.module.css"
import Card, { type Specie } from "../../components/Card/Card"
import Filter from "@/components/Filter/Filter";

type Species = Specie[];

export default async function OverviewPage() {

    const response = await fetch("https://raw.githubusercontent.com/jrowinski3d/mushroom-tracker-data-cdn/main/manifest.json")

    if(!response.ok) {
        notFound();
    }

    const data = await response.json();
    const species: Species = data.species;

    return(
        <>
            <Filter/>
            <section className={styles.container}>
                {
                    species.map(specie =>(
                        <Card key={specie.mushroom_id} specie={specie}/>
                    ))
                }
            </section>
        </>
    )
}