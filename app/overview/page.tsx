import { notFound } from "next/navigation"
import styles from "./page.module.css"
import Card, { type Specie } from "../../components/Card/Card"
import SortBtn from "../../components/SortBtn/SortBtn";
import SearchInput from "../../components/SearchInput/SearchInput";

type Species = Specie[];

export default async function OverviewPage({ searchParams }: { searchParams: Promise<{ q?: string; order?: string}>}) {
    const { q = "", order = "asc" } = await searchParams;

    const response = await fetch("https://raw.githubusercontent.com/jrowinski3d/mushroom-tracker-data-cdn/main/manifest.json")

    if(!response.ok) {
        notFound();
    }

    const data = await response.json();
    const species: Species = data.species;

    const filtered = species.filter(specie => 
        specie.common_name.toLowerCase().includes(q.toLowerCase()) ||
        specie.scientific_name.toLowerCase().includes(q.toLowerCase())
    )

    const sorted = [...filtered].sort((a, b) =>
        order === "desc" ? b.common_name.localeCompare(a.common_name) : a.common_name.localeCompare(b.common_name)
    );

    return(
        <>
            <div className={styles.filterContainer}>
                <SortBtn/>
                <SearchInput/>
            </div>
            <section className={styles.container}>
                {
                    sorted.map(specie =>(
                        <Card key={specie.mushroom_id} specie={specie}/>
                    ))
                }
            </section>
        </>
    )
}