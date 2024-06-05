import styles from "./style.module.css"

export default function Headline() {
    return(
        <div>
            <h1 className={styles.titulo}>descoberta revolucionária: Nova tecnologia
                transforma lixo em combustível limpo</h1>
                <br/>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae 
                incidunt molestiae culpa maiores nesciunt provident neque eos odio ab facere! 
                Architecto consequatur nam culpa iste at deleniti adipisci ipsa nihil.</p>
        </div>
    )
}