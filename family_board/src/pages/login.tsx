import LoginForm from "@/components/login/form";
import styles from "@/styles/components/login/login.module.css";

const Login = () => {
    return(
        <div className={styles.container}>
            <h1>Login</h1>
            <LoginForm />   
        </div>
    )
}

export default Login;