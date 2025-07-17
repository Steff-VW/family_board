import LoginForm from "@/components/login/form";
import styles from "@/styles/components/login/login.module.css";
import Link from "next/link";

const Login = () => {
    return(
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <h1>Login</h1>
                <LoginForm />   
                <Link href="/register" className={styles.register}>
                    <button className={styles.registerButton}>Register</button>
                </Link>
            </div>
        </div>
    )
}

export default Login;