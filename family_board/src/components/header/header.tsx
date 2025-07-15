import NavBar from "../nav/navbar";
import styles from "@/styles/components/header/header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                    Family Board - "FAMILY NAME" 
                </h1>
            </div>
            <div>
                <NavBar />
            </div>
        </div>
    )
} 

export default Header;