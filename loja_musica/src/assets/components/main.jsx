
import styles from '../css/main.module.css'

function main (){

    return(

        <div className={styles.main}>
            <div className={styles.text}>
                <h2> Nossa Loja Instrumentos Musicais </h2>
                <p> Se você é um amante da música, está em busca de um novo instrumento
                musical e não abre mão da qualidade, chegou ao lugar certo! Aqui em
                nossa loja você encontra os melhores itens, como: teclado,
                piano(digital e acústico), contrabaixo, bateria,guitarra, violão,
                sopro e muito mais! Nossos instrumentos possuem o selo de qualidade
                das melhores marcas do mercado! Escolha os seus favoritos e os
                receba em casa com toda a comodidade que você precisa. Confira
                nossas opções disponíveis e tenha em mãos instrumentos de ponta!
                </p>
            </div>
            <div className={styles.img}> </div>
        </div>

    )
}

export default main