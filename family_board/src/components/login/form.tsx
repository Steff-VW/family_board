import { useState } from "react";
import styles from "@/styles/components/login/form.module.css";

const LoginForm = () => {
const [username, setUsername] = useState<string>("");
const [password, setPassword] = useState<string>("");
const [error, setError] = useState<string | null>(null);

const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    try {
    const repsonse = await fetch("https://localhost:7279/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  })
  if (!repsonse.ok) {
    throw new Error("Login failed. Please check your credentials.");
  }   
    window.location.href = "/";
    } catch (error: any) {
        setError(error.message || "An unexpected error occurred. Please try again later.");
    }
}

return(
  <div>
    {error && <h2 className={styles.error}>{error}</h2>}
    <form className={styles.container} onSubmit={submitForm}>
        <input value={username} onChange={u => setUsername(u.target.value)} type="text" placeholder="Username" className={styles.textField}  required />
        <input value={password} onChange={p => setPassword(p.target.value)} type="password" placeholder="Password" className={styles.textField} required />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
    )
}

export default LoginForm;