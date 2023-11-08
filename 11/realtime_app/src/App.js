import './App.css';
import { useEffect, useState } from 'react'
import {init, subscribe} from './socketApi'
import Palette from './components/Palette';

function App() {
  const [activateColor, setActivateColor] = useState("#282c34")

  useEffect(()=>{
    init()
    subscribe((color)=>{
      setActivateColor(color)
    })
  },[])

  return (
    <div className="App" style={{backgroundColor:activateColor}}>
      <Palette activateColor={activateColor}/>
    
    </div>
  );
}

export default App;
