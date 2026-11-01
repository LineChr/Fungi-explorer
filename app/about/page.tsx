import styles from "./page.module.css"

export default function AboutPage() {
    return(
        <main className={styles.container}>
            <h1>about fungi explorer</h1>
            <p>Fungi explorer is a website for anyone interested in mushrooms and nature. It offers an easy way to explore different mushroom species and learn about their characteristics, habitats and potential toxicity.</p>
            <p>The information presented on this webside comes from mushroom tracker data, a dataset hosted on github. It contains a wide range of information about different mushroom species, including scientific names, descriptions, images, locations, habitat details, safety information and other specie-related data.  </p>
            <p>Fungi explorer was designed and developed by Line C. as part of a web development project. The website was built using next.js, react, typescript and css.</p>
        </main>
    )
}