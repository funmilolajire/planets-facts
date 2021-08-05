import { useAppContext } from '../../contexts/state';
import { FiMenu, FiChevronRight } from 'react-icons/fi'
import styles from './styles/navbar.module.scss'
import { useState, useLayoutEffect } from 'react';
import { menuHide, menuShow } from '../../animations/index';
import gsap from 'gsap';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [initial, setInitial] = useState(true)
    const { planet, setPlanet } = useAppContext()
    const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
    const handleMenu = () => {
        if (initial === true) {
            setInitial(false)
            setShowMenu(true)
        } else {
            setShowMenu(prev => !prev)
        }
    }
    useLayoutEffect(() => {
        // if (!showMenu) {
        //     menuHide('#mobileNav', '#secondary')
        // } else if (showMenu || showMenu && !initial) {
        //     gsap.to(['#secondary', '#mobileNav'], {
        //         duration: 0,
        //         opacity: 1,
        //         height: "100%"
        //     });
        //     menuShow('#secondary', '#mobileNav')
        // }
    }, [showMenu, initial])

    return (
        <header id="navbar" className={styles.container}>
            <h1>The Planets</h1>
            <menu>
                <span className={`${styles.menuIcon} ${showMenu ? styles.active : ''}`} onClick={handleMenu}><FiMenu /></span>
                <nav className={styles.desktopNav}>
                    {planets && planets.map((planet, index) =>
                        <h4 onClick={() => setPlanet(planet)} className={`${styles[planet]}`} key={index}>{planet}</h4>
                    )}
                </nav>
                {showMenu &&
                    <>
                        <div
                            // id="secondary"
                            className={styles.secondaryBackground}></div>
                        <nav
                            // id="mobileNav"
                            className={styles.mobileNav}>
                            {planets && planets.map((planet, index) =>
                                <h4 onClick={() => {
                                    setPlanet(planet)
                                    setShowMenu(false)
                                }} className={`${styles[planet]}`} key={index}>{planet} <span><FiChevronRight /></span></h4>
                            )}
                        </nav>
                    </>
                }
            </menu>
        </header>
    )
}

export default Navbar
