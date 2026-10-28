import { notFound } from "next/navigation"
import styles from "./page.module.css"
import Card, { type Specie } from "../../components/Card/Card"
import SortBtn from "../../components/SortBtn/SortBtn";
import SearchInput from "../../components/SearchInput/SearchInput";
import Pagination from "@/components/Pagination/Pagination";
import type { SpecieDetails } from "@/components/CardDetails/CardDetails";

type Species = Specie[];

export default async function OverviewPage({ searchParams }: { searchParams: Promise<{ q?: string; order?: string; page?: string }>}) {
    const { q = "", order = "asc", page = "1" } = await searchParams;
    const itemsPerPage = 12;

    const response = await fetch("https://raw.githubusercontent.com/jrowinski3d/mushroom-tracker-data-cdn/main/manifest.json")

    if(!response.ok) {
        notFound();
    }

    const data = await response.json();
    const species: Species = data.species;

    const cardDetails = await Promise.all(
        species.map(async (specie) => {
            const response = await fetch(specie.metadata_url);
            const details: SpecieDetails = await response.json();

            return{
                specie, common_name: details.common_name
            }
        })
    )

    const filtered = cardDetails.filter(({ specie, common_name }) => 
        common_name.toLowerCase().includes(q.toLowerCase()) ||
        specie.scientific_name.toLowerCase().includes(q.toLowerCase())
    )

    const sorted = [...filtered].sort((a, b) =>
        order === "desc" ? b.common_name.localeCompare(a.common_name) : a.common_name.localeCompare(b.common_name)
    );

    const currentPage = Number(page);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedSpecies = sorted.slice(startIndex, startIndex + itemsPerPage);


    return(
        <>
            <div className={styles.filterContainer}>
                <SortBtn/>
                <SearchInput/>
            </div>
            <section className={styles.container}>
                {filtered.length === 0 ? ( <p className={styles.errorMsg}>No species found.</p>) :
                    (paginatedSpecies.map(({ specie, common_name }) =>(
                        <Card key={specie.mushroom_id} specie={specie} common_name={common_name}/>
                    ))
                )}
            </section>
            <Pagination totalCount={sorted.length} itemsPerPage={itemsPerPage}/>
        </>
    )
}