import styles from "./Filter.module.css";;
import Form from "next/form";
import Image from "next/image";
import SortBtn from "../SortBtn/SortBtn";


export default function Filter() {
    return(
        <div className={styles.filterContainer}>
            <SortBtn/>

            <div className={styles.searchFilter}>
                <Form action="/search" formMethod="GET">
                    <Image src="/search.svg" width={30} height={30} alt=""/>
                    <input name="q" placeholder="search..."/>
                </Form>
            </div>
        </div>
    )
}