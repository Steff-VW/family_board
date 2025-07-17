import Form from "@/components/register/form"
import styles from "@/styles/components/register/register.module.css";
import Link from "next/link";

const Login = () => {

return (
    <div className={styles.container}>
      <h1>Create account</h1>
      <Form />
      <Link href="/login">Login</Link>
    </div>
  );
}

export default Login;