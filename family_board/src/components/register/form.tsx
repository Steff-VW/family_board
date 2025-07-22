import { FormEvent, useState } from "react";
import styles from "@/styles/components/register/form.module.css";

const RegisterForm = () => {
const [username, setUsername] = useState<string>("");
const [password, setPassword] = useState<string>("");
const [confirmPassword, setConfirmPassword] = useState<string>("");
const [email, setEmail] = useState<string>("");
const [firstName, setfirstName] = useState<string>("");
const [lastName, setLastName] = useState<string>("");
const [dateOfBirth, setDateOfBirth] = useState<string>("");
const [error, setError] = useState<string | null>(null);

const submitForm  = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
  if( password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  }
    const response = await fetch("https://localhost:7279/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({ username, password, email, firstName, lastName, dateOfBirth })
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  } else {
    window.location.href = "login";
  }
  } catch (error: string | any) {
    setError( error.message ||"An unexpected error occurred. Please try again later.");
  }
}

return(
  <div>
    {error && <h2 className={styles.error}>{error}</h2>}
    <form className={styles.container} onSubmit={submitForm}>
        <input value={username} onChange={u => setUsername(u.target.value)} type="text" placeholder="Username" className={styles.textField}  required />
        <input value={firstName} onChange={f => setfirstName(f.target.value)} type="text" placeholder="First Name" className={styles.textField} required />
        <input value={lastName} onChange={l => setLastName(l.target.value)} type="text" placeholder="Last Name" className={styles.textField} required />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className={styles.textField} required />
        <input value={dateOfBirth} onChange={d => setDateOfBirth(d.target.value)} type="date" placeholder="Date of Birth" className={styles.textField} required />
        <input value={password} onChange={p => setPassword(p.target.value)} type="password" placeholder="Password" className={styles.textField} required />
        <input value={confirmPassword} onChange={u => setConfirmPassword(u.target.value)} type="password" placeholder="Confirm Password" className={styles.textField} required />
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
    )
}

export default RegisterForm;