import styles from '../../styles/components/nav/nav.module.css';

const NavBar = () => {
    return(
        <div>
            <nav>
                <ul className={styles.listContainer}>
                    <li><a href="/">Board</a></li>
                    <li><a href="/about">Tasks</a></li>
                    <li><a href="/contact">Grocery List</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;