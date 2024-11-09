import styles from '../css/forms.module.css'

function forms (){

    return(

        <div className={styles.main}>
            
                <form className={styles.forms}>
                    <label htmlFor=""> Entre com seu nome:</label>
                    <input type="text" placeholder="Digite seu nome" style={{border: '1px solid black'}}/>
                    <label htmlFor=""> Entre com seu e-mail:</label>
                    <input type="text" placeholder="Digite seu e-mail" style={{border: '1px solid black'}}/>
                    <input type="text" placeholder="Faça seu pedido" style={{border: '1px solid black'}}/>
                    <button type="submit"> Enviar </button>
                </form>

            <div className={styles.social}>
                <h2> Acesse nossas Redes Sociais </h2>
                <div className={styles.box}>
                    <div className={styles.insta}> </div>
                    <div className={styles.whats}> </div>
                    <div className={styles.face}> </div>
                </div>
  
            </div>
        </div>

    )
}

export default forms