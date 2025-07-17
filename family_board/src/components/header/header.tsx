import Link from "next/link";
import NavBar from "../nav/navbar";
import styles from "@/styles/components/header/header.module.css";

const Header = () => {

    const logOut = async () => {
        await fetch('https://localhost:7279/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        window.location.reload();
    }

    return (
        <div className={styles.container}>
            <div className={styles.accountContainer}>
                <Link href="/profile"><button className={styles.button}>Profile</button></Link>
                <button onClick={logOut} className={styles.button}>Logout</button>
            </div>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                    Family Board - "FAMILY NAME" </h1>
            </div>
            <div>
                <NavBar />
            </div>
        </div>
    )
} 

export default Header;