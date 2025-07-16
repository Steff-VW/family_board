import Form from "@/components/register/form"
import styles from "@/styles/components/register/register.module.css";

const Login = () => {

return (
    <div className={styles.container}>
      <h1>Create account</h1>
      <Form />
    </div>
  );
}

export default Login;