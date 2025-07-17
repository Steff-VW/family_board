import LoginForm from "@/components/login/form";
import styles from "@/styles/components/login/login.module.css";
import Link from "next/link";

const Login = () => {
    return(
        <div className={styles.container}>
            <h1>Login</h1>
            <LoginForm />   
            <Link href="/register">Register</Link>
        </div>
    )
}

export default Login;