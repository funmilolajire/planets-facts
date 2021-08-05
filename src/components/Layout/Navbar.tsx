import { useAppContext } from '../../contexts/state';
import { FiMenu, FiChevronRight } from 'react-icons/fi'
import styles from './styles/navbar.module.scss'
import { useState, useLayoutEffect } from 'react';
import { menuHide, menuShow } from '../../animations/index';
import { Transition } from 'react-transition-group';

const duration = 500;

const defaultStyle = {
    transition: `all ${duration}ms ease-out`,
    opacity: 0,
    transform: "translateX(100%)"
}

const transitionStyles: NavbarTransition = {
    entering: { opacity: 1, transform: "translateX(0)" },
    entered: { opacity: 1, transform: "translateX(0)" },
    exiting: { opacity: 0, transform: "translateX(100%)" },
    exited: { opacity: 0, transform: "translateX(100%)" },
};


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { planet, setPlanet } = useAppContext()
    const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
    const handleMenu = () => {
        setShowMenu(prev => !prev)
    }
    useLayoutEffect(() => {

    }, [showMenu])

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
                <Transition
                    in={showMenu}
                    timeout={duration}
                // mountOnEnter
                // unmountOnExit
                // appear={showMenu}
                // enter
                >
                    {(state: keyof NavbarTransitionState) => (
                        <nav
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                            id="mobileNav"
                            className={styles.mobileNav}>
                            {planets && planets.map((planet, index) =>
                                <h4 onClick={() => {
                                    setPlanet(planet)
                                    setShowMenu(false)
                                }} className={`${styles[planet]}`} key={index}>{planet} <span><FiChevronRight /></span></h4>
                            )}
                        </nav>
                    )}
                </Transition>
            </menu>
        </header>
    )
}

export default Navbar
