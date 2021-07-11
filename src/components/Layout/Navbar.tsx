import styles from './styles/navbar.module.scss'

const Navbar = () => {
    const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
    return (
        <header className={styles.container}>
            <h1>The Planets</h1>
            <nav>
                {planets && planets.map((planet, index) =>
                    <h4 className={`${styles[planet]}`} key={index}>{planet}</h4>
                )}
            </nav>
        </header>
    )
}

export default Navbar
