import User from "@/interfaces/user";
import styles from "@/styles/components/profile/information.module.css"
import { useEffect, useState } from "react";

const Information = () => {
const [error, setError] = useState<string | null>(null);
const  [userInfo, setUserInfo] = useState<User>();
const [formated, setFormated] = useState<string>("");
const getInformation = async () => {
    try {
        const response = await fetch("https://localhost:7279/profile/information", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
        })
        if(!response.ok){
            throw new Error("Failed to fetch information.");
        } else {
            const data = await response.json();
            setUserInfo(data);
        }
    } catch (error: any) {
        setError(error.message || "An unexpected error occurred. Please try again later.");
    }
}

useEffect(() => {
getInformation();    
}, []);

useEffect(() => {
  if (userInfo?.dateOfBirth) {
    const formattedDate = new Date(userInfo.dateOfBirth).toLocaleDateString('nl-BE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setFormated(formattedDate);
  }
}, [userInfo]);

    return (
        <div className={styles.informationContainer}>
            {error && <h2 className={styles.error}>{error}</h2>}
            <h2 className={styles.informationTitle}>Information</h2>
            <h3>Username</h3>
            <p className={styles.informationBox}>{userInfo?.userName}</p>
            <h3>First name</h3>
            <p className={styles.informationBox}>{userInfo?.firstName}</p>
            <h3>Last name</h3>
            <p className={styles.informationBox}>{userInfo?.lastName}</p>
            <h3>Email</h3>
            <p className={styles.informationBox}>{userInfo?.email}</p>
            <h3>Date of Birth</h3>
            <p className={styles.informationBox}>{formated}</p>
        </div>
    )
}

export default Information;