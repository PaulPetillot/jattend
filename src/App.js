import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`${year}-08-21T12:49:00`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
      heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      secondes: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;

}
function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    console.log(timer)
  });
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval} style={{ fontWeight: "bold"}}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className='app'>
      <h1 className='timer-title'>Marine arrive dans:</h1>
      <div>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <div className='links'>
        <ul>
          <li><Link to='/restaurants'>Où Manger ?</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
