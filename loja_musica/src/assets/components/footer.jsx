import styles from '../css/footer.module.css'

function footer() {

    return (

        <div className={styles.footer}>
            <h3> Nossa Loja - Instrumentos Musicais </h3>
            <p> Rua Tito, 54 - Lapa <br></br>
                São Paulo - Brasil
            </p>
            <div className={styles.social}>
                <div className={styles.insta}> </div>
                <div className={styles.whats}> </div>
                <div className={styles.face}> </div>
            </div>


        </div>

    )
}
export default footer