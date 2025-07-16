import { useState } from "react";
import styles from "@/styles/components/login/form.module.css";

const Form = () => {
const [username, setUsername] = useState<string>("");
const [password, setPassword] = useState<string>("");

    return(
    <form action="POST" className={styles.container}>
        <input value={username} onChange={u => setUsername(u.target.value)} type="text" placeholder="Username" className={styles.textField} required />
        <input value={password} onChange={p => setPassword(p.target.value)} type="password" placeholder="Password" className={styles.textField} required />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    )
}

export default Form;