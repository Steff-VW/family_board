import Form from "@/components/register/form"
import styles from "@/styles/components/register/register.module.css";
import Link from "next/link";

const Login = () => {

return (
    <div className={styles.container}>
      <div className={styles.registerContainer}>
        <h1>Create account</h1>
        <Form />
          <Link href="/login" className={styles.login}>
          <button className={styles.loginButton}>Login</button>
          </Link>  
      </div>
    </div>
  );
}

export default Login;