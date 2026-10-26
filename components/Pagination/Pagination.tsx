"use client";
import { useRouter, useSearchParams } from "next/navigation"
import styles from "./Pagination.module.css"


type PaginationProps = {
    totalCount: number;
    itemsPerPage: number;
}


export default function Pagination({ totalCount, itemsPerPage}: PaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const page = Number(searchParams.get("page") ?? 1);
    const totalPages = Math.ceil(totalCount / itemsPerPage)

    function handlePageChange(pageNumber: number) {
        const params = new URLSearchParams(searchParams.toString())
        params.set("page", String(pageNumber))
        router.push(`?${params.toString()}`)
    }

    function handleNextPage() {
        if (page < totalPages) {
            handlePageChange(page + 1)
        }
    }

    function handlePrevPage() {
        if (page > 1) {
            handlePageChange(page - 1)
        }
    }

    function handlePageSelect(pageNumber: number) {
        if (pageNumber !== page) {
            handlePageChange(pageNumber)
        }
    }

    let pages: (number | string)[];

    if (totalPages <= 7) {
        pages = Array.from({ length: totalPages}, (_, i) => i + 1)
    } else if (page <= 4) {
        pages = [1, 2, 3, 4, 5, "...", totalPages]

    } else if (page >= totalPages - 3) {
            pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages]

    } else {
            pages = [1, "...", page - 1, page, page + 1, "...", totalPages]
    }


    
    return(
        <nav className={styles.container}>
            <button onClick={handlePrevPage}>&lt; prev</button>
            <ul>
                {pages.map((pageNumber, index) => (
                    <li key={index}>
                        {pageNumber === "..." ? ("...") : ( 
                            <button 
                                onClick={() => handlePageSelect(Number(pageNumber))}
                                className={Number(pageNumber) === page ? styles.active : ""}>
                                {pageNumber}
                            </button>)}
                    </li>
                ))}
            </ul>
            <button onClick={handleNextPage}>next &gt;</button>
        </nav>
    )
}