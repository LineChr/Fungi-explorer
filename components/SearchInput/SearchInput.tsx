"use client";
import styles from "./SearchInput.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchInput() {
    const router = useRouter();

    return (
        <div className={styles.searchFilter}>
                <Image src="/search.svg" width={30} height={30} alt=""/>
                <input type="search" autoComplete="off" placeholder="search..." onChange={(e) => router.replace("?q=" + e.target.value)}/>
        </div>
    )
}