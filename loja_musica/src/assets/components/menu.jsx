import {Link} from 'react-router-dom'
import styles from '../css/menu.module.css'

function menu() {

    return (

        <header className={styles.header}>
        <nav className={styles.menu}>
            <ul>
                <li> <Link to='/'> Home </Link> </li>
                <li> <Link to='/'> Quem somos </Link> </li>
                <li> <Link to='Store'> Instrumentos </Link> </li>
                <li> <Link to='Place'> Endereço  </Link> </li>
                <li> <Link to='Forms'> Contato </Link> </li>
            </ul>
        </nav>
        </header>
    )
}

export default menu