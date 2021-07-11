import { FC } from "react"
import Navbar from "./Navbar"
import styles from './styles/layout.module.scss'

const Layout: FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
