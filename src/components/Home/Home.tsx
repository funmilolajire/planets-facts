import Bottom from './Bottom';
import PlanetImage from './PlanetImage';
import Text from './Text';
import styles from './styles/home.module.scss'
import { useState, FC } from 'react';

const Home: FC<PlanetData> = ({ ...planetData }) => {
    const [button, setButton] = useState<keyof ButtonsKeys>('overview')
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <PlanetImage {...planetData.images} button={button} name={planetData.name} />
                <Text {...planetData} button={button} setButton={setButton} />
            </div>
            <Bottom
                rotation={planetData.rotation}
                revolution={planetData.revolution}
                radius={planetData.radius}
                temperature={planetData.temperature}
            />
        </div>
    )
}



export default Home
