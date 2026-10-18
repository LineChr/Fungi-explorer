"use client";
import styles from "./Sort.module.css";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function SortBtn() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const clicked = searchParams.get("order") === "desc";

    function handleClick() {
        const params = new URLSearchParams(searchParams.toString());

        params.set("order", clicked ? "asc" : "desc");
        router.replace("?" + params.toString());
    }

    const imageSrc = clicked ? "/alphabet-sort-2.svg" : "/alphabet-sort-1.svg";
    const altText = clicked ? "sort z to a" : " sort a to z";

    return(
        <button className={styles.alphabetFilter} onClick={handleClick}>
                <Image src={imageSrc} width={30} height={30} alt={altText}/>
        </button>
    )
}