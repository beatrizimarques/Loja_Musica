import Card from '../components/card_props.jsx'
import styles from '../css/store.module.css'
import guitarrinha from '../img/guitarrinha.jpg'

function store(){

    return(

        <div className={styles.loja}>
            <Card instrumento={guitarrinha} texto="VIOLÃO YAHAMA C70 II CLÁSSICO
            NYLON ACÚSTICO NATURAL BRILHANTE" valor="R$989,50"></Card>
            <Card instrumento={guitarrinha} texto="VIOLÃO YAHAMA C70 II CLÁSSICO
            NYLON ACÚSTICO NATURAL BRILHANTE" valor="R$989,50"></Card>
            <Card instrumento={guitarrinha} texto="VIOLÃO YAHAMA C70 II CLÁSSICO
            NYLON ACÚSTICO NATURAL BRILHANTE" valor="R$989,50"></Card>
            <Card instrumento={guitarrinha} texto="VIOLÃO YAHAMA C70 II CLÁSSICO
            NYLON ACÚSTICO NATURAL BRILHANTE" valor="R$989,50"></Card>
        </div>
    )
}

export default store

