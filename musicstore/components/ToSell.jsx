import styles from '../styles/ToSell.module.css';


function ToSell(props) {
    return (
        <div className={styles.fatigue}>
            <img className={styles.img} src={props.img}></img>
            <div className={styles.inImage}>
                <p>{props.name}</p>
                <h3>{props.desc}</h3>
                <button className={styles.discover_btn}>DISCOVER</button>
            </div>
        </div>
    )
}

export default ToSell