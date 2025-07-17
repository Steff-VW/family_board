import Link from 'next/link';
import styles from '../../styles/components/nav/nav.module.css';

const NavBar = () => {
    return(
        <div>
            <nav>
                <ul className={styles.listContainer}>
                    <li><Link href="/">Board</Link></li>
                    <li><Link href="/about">Tasks</Link></li>
                    <li><Link href="/contact">Grocery List</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;