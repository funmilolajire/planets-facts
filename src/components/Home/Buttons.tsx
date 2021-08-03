import { FC } from 'react';
import styles from './styles/buttons.module.scss'

const Buttons: FC<ButtonsData> = ({ name, button, setButton }) => {
    return (
        <div className={`${styles.container} ${name && styles[name.toLowerCase()]}`}>
            <button onClick={() => setButton('overview')} className={button && button === "overview" ? styles.active : ''} value="overview">
                <h3 className={styles.number}>01</h3>
                <h3 className={styles.text}>Overview</h3>
            </button>
            <button onClick={() => setButton('structure')} className={button && button === "structure" ? styles.active : ''} value="structure">
                <h3 className={styles.number}>02</h3>
                <h3 className={styles.text}>Internal Structure</h3>
            </button>
            <button onClick={() => setButton('geology')} className={button && button === "geology" ? styles.active : ''} value="geology">
                <h3 className={styles.number}>03</h3>
                <h3 className={styles.text}>Surface Geology</h3>
            </button>
        </div>
    )
}

export default Buttons
