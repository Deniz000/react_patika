import {useState} from 'react'
import {send} from '../socketApi'

export default function Palette({activateColor}) {
  const [color, setColor] = useState("#000")

  return (
    <div className='palette'>
      <input type='color' value={activateColor} onChange={(e)=>setColor(e.target.value)}/>
      <button onClick={()=>send(color)}>Click</button>
      {color}
    </div>
  )
}
