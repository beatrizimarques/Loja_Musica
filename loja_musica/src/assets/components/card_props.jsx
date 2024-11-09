import styles from '../css/card_props.module.css'

function card ({instrumento, texto, valor}){

    return(

        <div className={styles.card}>
            <img  className={styles.instrumento} src={instrumento} alt="violão" />
            <p> {texto} </p>
            <h3 className={styles.valor}> {valor} </h3>
        </div>

    )
}

export default card 