import styles from '../styles/LatestLaunch.module.css';


function LatestLaunch() {
    return (
        <div>
            <div className={styles.latest}>
                <div>
                    <p className={styles.thin}>LATEST LAUNCH</p>
                    <h3 className={styles.fat}>DIONE SOUNDBAR</h3>
                </div>
                <img src='soundbar.png'></img>
                <button className={styles.discover_btn}>discover</button>

            </div>

        </div>

    )
}

export default LatestLaunch