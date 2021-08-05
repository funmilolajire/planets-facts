import { FC } from 'react';
import styles from './styles/buttons.module.scss'

const MobileButtons: FC<ButtonsData> = ({ name, button, setButton }) => {
    return (
        <div id="navbar" className={`${styles.container} ${styles.mobile} ${name && styles[name.toLowerCase()]}`}>
            <button onClick={() => setButton('overview')} className={button && button === "overview" ? styles.active : ''} value="overview">
                <h3 className={styles.text}>Overview</h3>
            </button>
            <button onClick={() => setButton('structure')} className={button && button === "structure" ? styles.active : ''} value="structure">
                <h3 className={styles.text}>Structure</h3>
            </button>
            <button onClick={() => setButton('geology')} className={button && button === "geology" ? styles.active : ''} value="geology">
                <h3 className={styles.text}>Surface</h3>
            </button>
        </div>
    )
}

export default MobileButtons
