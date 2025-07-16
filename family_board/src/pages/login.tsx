import Form from "@/components/login/form"
import styles from "@/styles/components/login/login.module.css";

const Login = () => {

return (
    <div className={styles.container}>
      <h1>Welkom to the Family Board!</h1>
      <Form />
    </div>
  );
}

export default Login;