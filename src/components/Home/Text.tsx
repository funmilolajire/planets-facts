import Buttons from './Buttons'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import { FC, useEffect, useState } from 'react';
import styles from './styles/text.module.scss'

interface Data {
    content: string
    source: string
}

const Text: FC<TextData> = ({ button, setButton, ...planetData }) => {
    const [data, setData] = useState<Data>(Object)
    useEffect(() => {
        const data = planetData[button] || {}
        setData(data)
    }, [button, planetData])
    return (
        <section className={styles.container}>
            <h1>{planetData.name || ''}</h1>
            <div className={styles.info}>
                <p className={styles.writeup}>{data.content}</p>
                <p className={styles.source}>Source : <a
                    href={data.source}
                    target="_blank"
                    rel="noopener noreferrer">Wikipedia <FaExternalLinkSquareAlt className={styles.icon} /></a></p>
            </div>
            <Buttons name={planetData.name || ''} button={button && button} setButton={setButton} />
        </section>
    )
}

export default Text
