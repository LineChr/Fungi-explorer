"use client";
import styles from "../Filter/Filter.module.css";
import Image from "next/image";
import { useState } from "react";

export default function SortBtn() {
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(!clicked);
    }

    const imageSrc = clicked ? "/alphabet-sort-2.svg" : "/alphabet-sort-1.svg";
    const altText = clicked ? "sort Z to A" : "sort A to Z"; 

    return(
        <button className={styles.alphabetFilter} onClick={handleClick}>
                <Image src={imageSrc} width={30} height={30} alt={altText}/>
        </button>
    )
}