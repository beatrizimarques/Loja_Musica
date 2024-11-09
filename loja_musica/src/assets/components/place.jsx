import styles from '../css/place.module.css'

function main (){

    return(

        <div className={styles.main}>
            <div className={styles.place}> 
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.9181163744673!2d-46.698083384407555!3d-23.526237884703267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5783f48c1fb1%3A0x7e8d9b7eae2fd6!2sRua%20Tito%2C%2054%20-%20Vila%20Romana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1633668564639!5m2!1sen!2sbr"
                    width="550"
                    height="320"
                    style={{ border: '16' }}>
            </iframe>
            </div>
            <div className={styles.text}>
                <h2> Nossa Loja Instrumentos Musicais </h2>
                <p> Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão da qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como: teclado, piano(digital e acústico), contrabaixo, bateria,guitarra, violão, sopro e muito mais! Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e os receba em casa com toda a comodidade que você precisa. Confira nossas opções disponíveis e tenha em mãos instrumentos de ponta!
                </p>
            </div>
        </div>

    )
}

export default main