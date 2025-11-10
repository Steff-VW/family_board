import Header from '@/components/header/header'
import Link from 'next/link';
import Calendar, { CalendarProps } from 'react-calendar';
import { useEffect, useState } from 'react';
import styles from '@/styles/components/home/home.module.css';
import 'react-calendar/dist/Calendar.css';
import EventForm from '@/components/home/eventForm';


const Home = () => {
const [loggedIn, setLoggedIn] = useState(false);
const [loading, setLoading] = useState(true);
const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
const [events, setEvents] = useState<{ [key: string]: string[] }>({});
const [newEventText, setNewEventText] = useState('');


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

  const handleDateChange: CalendarProps['onChange'] = (value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value)) {
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(null);
    }
  };

  const addEvent = () => {
    const eventKey = selectedDate?.toDateString() || '';
    setEvents((prev) => ({
      ...prev,
      [eventKey]: [...(prev[eventKey] || []), newEventText],
    }));
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
        <div>
          <Calendar onChange={handleDateChange} value={selectedDate}/>
          <EventForm addEvent={addEvent} newEventText={newEventText} setNewEventText={setNewEventText}/>
            {selectedDate && 
            <div>
              <h2>Events for {selectedDate.toDateString()}:</h2>
              <ul>
                {(events[selectedDate.toDateString()] || []).map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            </div>}
        </div>
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

