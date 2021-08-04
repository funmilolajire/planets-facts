import { useAppContext } from '../../contexts/state';
import { FiMenu, FiChevronRight } from 'react-icons/fi'
import styles from './styles/navbar.module.scss'
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { planet, setPlanet } = useAppContext()
    const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
    const handleMenu = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <header className={styles.container}>
            <h1>The Planets</h1>
            <menu>
                <span className={`${styles.menuIcon} ${showMenu ? styles.active : ''}`} onClick={handleMenu}><FiMenu /></span>
                <nav className={styles.desktopNav}>
                    {planets && planets.map((planet, index) =>
                        <h4 onClick={() => setPlanet(planet)} className={`${styles[planet]}`} key={index}>{planet}</h4>
                    )}
                </nav>
                {showMenu && <nav className={styles.mobileNav}>
                    {planets && planets.map((planet, index) =>
                        <h4 onClick={() => {
                            setPlanet(planet)
                            setShowMenu(false)
                        }} className={`${styles[planet]}`} key={index}>{planet} <span><FiChevronRight /></span></h4>
                    )}
                </nav>}
            </menu>
        </header>
    )
}

export default Navbar
