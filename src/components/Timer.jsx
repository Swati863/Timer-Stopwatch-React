import React, { useRef } from 'react'
import { useState ,useEffect } from 'react'


const Timer = () => {
 const [timer, setTimer] = useState(300000)
 const timerId = useRef(null)
//  const [input,setInput] = useState(0)

 

 function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
//  useEffect(() => {

//    let id = setInterval(()=>{
//        setTimer(timer + 1)
//    },1000)
 
//    return () => {
//     // call a api to inform that user has cleared
//     clearInterval(id)
    
//    }   
//  }, [timer])

const inputTimer = (i) =>{
setTimer(i*60000)
// setInput(null)
start()
}


 const start = () => {
    
   if(!timerId.current){
    let id = setInterval(()=>{
        setTimer((prev)=> prev - 1000)
    },1000)
    timerId.current = id
   // setTimer(id)

   }
 };

 const pause = () => {
     clearInterval(timerId.current)
     timerId.current = null
 }

 const reset = () => {
   clearInterval(timerId.current)
   timerId.current = null   
    setTimer(300000)
 }

 
  return (
    <div>

        <h2>Timer</h2>
        <div><input onChange={(e)=>inputTimer(e.target.value)} placeholder='Enter value for Timer'/></div>
        {/* <h1>{timer}</h1> */}
        <h2>{msToTime(timer)}</h2>
        <div>
        <button onClick={start} style={{ margin:"10px" }}>START</button>
        <button onClick={pause} style={{ margin:"10px" }}>PAUSE</button>
        <button onClick={reset} style={{ margin:"10px" }}>RESET</button>
    </div>
    </div>
  )
}

export default Timer