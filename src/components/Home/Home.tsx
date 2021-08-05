import Bottom from './Bottom';
import PlanetImage from './PlanetImage';
import Text from './Text';
import styles from './styles/home.module.scss'
import { useState, FC, useEffect, useLayoutEffect } from 'react';
import MobileButtons from './MobileButtons';
import { pageAnimation } from '../../animations';

const Home: FC<PlanetData> = ({ ...planetData }) => {
    const [button, setButton] = useState<keyof ButtonsKeys>('overview')
    useLayoutEffect(() => {
        pageAnimation('#navbar', '#image', '#text', '#bottom') //change to refs
    }, [])
    return (
        <div className={styles.container}>
            <MobileButtons name={planetData.name || ''} button={button && button} setButton={setButton} />
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
