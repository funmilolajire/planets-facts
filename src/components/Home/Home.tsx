import Bottom from './Bottom';
import PlanetImage from './PlanetImage';
import Text from './Text';
import styles from './styles/home.module.scss'

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <PlanetImage />
                <Text />
            </div>
            <Bottom />
        </div>
    )
}



export default Home
