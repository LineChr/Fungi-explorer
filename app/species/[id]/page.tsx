import CardDetails from "@/components/CardDetails/CardDetails";
import { notFound } from "next/navigation";
import type { Specie } from "@/components/Card/Card"


export default async function MushroomPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const response = await fetch("https://raw.githubusercontent.com/jrowinski3d/mushroom-tracker-data-cdn/main/manifest.json")

    if(!response.ok) {
        notFound();
    }

    const data = await response.json();
    console.log(data);
    const specie = data.species.find((specie: Specie) => specie.mushroom_id === id)

    if(!specie) {
        notFound();
    }

    const detailsResponse = await fetch(specie.metadata_url)
    const details = await detailsResponse.json();
    

    return(
        <CardDetails details={details}/>
    )
}