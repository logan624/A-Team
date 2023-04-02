import React, { useState, useEffect } from 'react';

const Timer = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState(endTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(endTime - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return <div>Time left: {Math.round(timeLeft / 1000)} seconds</div>;
};

export default Timer;
