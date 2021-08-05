import styles from './styles/planetimage.module.scss'
import { FC, useState, useEffect } from 'react';

const PlanetImage: FC<PlanetImageData> = ({ button, planet, geology, internal, name }) => {
    const [image, setImage] = useState('')
    useEffect(() => {
        const images = {
            overview: planet,
            structure: internal,
            geology: geology
        }
        setImage(button !== "geology" ? images[button] : images['overview'])
    }, [button, geology, internal, planet])
    return (
        <div id="image" className={styles.container}>
            <picture>
                {image && <img
                    className={styles.planet}
                    alt={"planet-" + name.toLowerCase()}
                    src={image}
                />}
                {image && (button && button === "geology") && <img
                    className={`${styles.planet} ${styles.geology}`}
                    alt={"planet-" + name.toLowerCase()}
                    src={geology && geology}
                />}
            </picture>
        </div>
    )
}

export default PlanetImage
