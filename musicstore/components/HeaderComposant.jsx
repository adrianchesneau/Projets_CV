import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/HeaderComposant.module.css';

function HeaderComposant() {
    return (
        <div>
            <div className={styles.profil}>
                <div className={styles.iconLeft}>
                    <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </div>
                <div className={styles.title}>
                    <h1>MUSIC STORE</h1>
                </div>
                <div className={styles.iconRight}>
                    <FontAwesomeIcon className={styles.icon} icon={faUser} />
                    <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
                    <FontAwesomeIcon className={styles.icon} icon={faBagShopping} />
                </div>

            </div>
        </div >

    )
}

export default HeaderComposant