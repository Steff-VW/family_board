import Header from '@/components/header/header'
import { useEffect } from 'react';

const Home = () => {
const checkLogin = async () => {
  var response = await fetch("https://localhost:7279/CheckLogin",{
    method: "GET",
    credentials: "include"
  });
  if (!response.ok) {
    window.location.href = "login";
  }
}

useEffect(() => {
  checkLogin();
})


  return (
      <div>
        <Header />
      </div>
    );
}

export default Home;

