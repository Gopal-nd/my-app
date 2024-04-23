'use client'
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId); // Clear the interval on component unmount
   
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="flex h-screen w-screen text-white bg-black flex-col justify-center items-center gap-10">
      <h1 className="text-5xl">Current Time</h1>
      <p className="text-5xl">{currentTime}</p>
    </div>
  );
};



export default Home;
