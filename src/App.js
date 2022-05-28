import logo from './logo.svg';
import './App.css';
import Timer from "./components/Timer"
import Stopwatch from './components/Stopwatch';
import { useState } from 'react'


function App() {
const [show, setShow] = useState(true)
  
  return (
    <div className="App">

      <div className='main_div'>
        <div onClick = {()=>setShow((show) =>!show)}>TIMER</div>
        <div onClick = {()=>setShow((show) =>!show)}>STOPWATCH</div>
      </div>

      <div>
    {show ?
      <div> <Timer/> </div>  : <div> <Stopwatch /> </div>
     }
      </div>

    </div>
  );
}

export default App;
