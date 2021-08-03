import { useEffect, useState, FC } from 'react';
import styles from './styles/bottom.module.scss'

const Bottom: FC<BottomData> = ({ rotation, revolution, radius, temperature }) => {
    const [items, setItems] = useState<[String, String][]>([])
    useEffect(() => {
        const data = {
            "rotation time": rotation,
            "revolution time": revolution,
            radius: radius,
            "average temp.": temperature
        }
        setItems(Object.entries(data))
    }, [rotation, revolution, radius, temperature])
    return (
        <ul className={styles.container}>
            {
                items && items.map((item, index) =>
                    <li className={styles.box} key={index}>
                        <h4>{item[0]}</h4>
                        <h2>{item[1]}</h2>
                    </li>
                )
            }
        </ul>
    )
}

export default Bottom
