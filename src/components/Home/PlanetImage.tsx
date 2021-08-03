import styles from './styles/planetimage.module.scss'
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';

const PlanetImage: FC<PlanetImageData> = ({ button, planet, geology, internal, name }) => {
    const [image, setImage] = useState('')
    useEffect(() => {
        const images = {
            overview: planet,
            structure: internal,
            geology: geology
        }
        console.log(images)
        setImage(button !== "geology" ? images[button] : images['overview'])
    }, [button, geology, internal, planet])
    return (
        <div className={styles.container}>
            <picture>
                {image && <img
                    className={styles.planet}
                    alt={"planet-" + name.toLowerCase()}
                    src={image}
                // height="290"
                // width="290"
                // placeholder="empty"
                // objectFit="inherit"
                // layout="responsive"
                />}
                {image && (button && button === "geology") && <img
                    className={`${styles.planet} ${styles.geology}`}
                    alt={"planet-" + name.toLowerCase()}
                    src={geology && geology}
                // height="100%"
                // width="100%"
                // placeholder="empty"
                // objectFit="inherit"
                // layout="responsive"
                />}
            </picture>
        </div>
    )
}

export default PlanetImage
