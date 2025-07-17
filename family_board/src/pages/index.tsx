import Header from '@/components/header/header'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '@/styles/components/home/home.module.css';

const Home = () => {
const [loggedIn, setLoggedIn] = useState(false);
const [loading, setLoading] = useState(true);

const checkLogin = async () => {
  var response = await fetch("https://localhost:7279/CheckLogin",{
    method: "GET",
    credentials: "include"
  });
  if (!response.ok) {
    setLoggedIn(false);
  } else {
    setLoggedIn(true);
  }
  setLoading(false);
}

useEffect(() => {
  checkLogin();
}, []);

if (loading) {
    return <div className={styles.container}></div>
  }

  if(loggedIn) {
      return (
      <div>
        <Header />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Welcome to Family Board</h1>
          <h2>Please log in to continue.</h2>
          <div className={styles.buttonContainer}>
            <Link href="/login"><button className={styles.button}>Login</button></Link>
            <Link href="/register"><button className={styles.button}>Register</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

