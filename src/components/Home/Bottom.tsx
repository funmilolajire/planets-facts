import { useEffect, useState } from 'react'
import styles from './styles/bottom.module.scss'

const Bottom = () => {
    const [items, setItems] = useState<[String, String][]>([])
    useEffect(() => {
        const data = {
            "rotation time": "17.2 Hours",
            "revolution time": "84 Years",
            radius: "25,362 KM",
            "average temp.": "-195°c"
        }
        setItems(Object.entries(data))
    }, [])
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
