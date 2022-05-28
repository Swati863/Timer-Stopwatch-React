import { useEffect, useRef, useState } from "react"
import React from 'react'


const Stopwatch = () => {
  const [watch, setWatch] = useState(0) 
  const timerId =useRef(null)

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

const start = () => {
    if(!timerId.current){
        let id = setInterval (() => {
            setWatch((prev) => prev+1000);
        },100);
       timerId.current = id;
    }
};
const pause = () => {
    clearInterval ( timerId.current);
    timerId.current = null;
};

const reset = () => {
    clearInterval( timerId.current);
    setWatch(0)
    timerId.current = null;
};

useEffect(() => {
  
  return reset;
    
}, [])


  return (
    <div>
        <h2>Stopwatch :</h2>
        <h2>{msToTime (watch)}</h2>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
        
        
        </div>
  )
}

export default Stopwatch
