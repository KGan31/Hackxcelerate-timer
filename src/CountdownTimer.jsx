import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-03-23T14:00:00+05:30') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="timer-element">
        <span className="timer-value">{timeLeft[interval]}</span>
        <span className="timer-label">{interval}</span>
      </span>
    );
  });

  return (
    <div className="countdown-timer">
     <div>
      <h1 className='time-rem'>Time Remaining</h1>

      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default CountdownTimer;
