import React from 'react'
import { useState, useEffect } from 'react';

function Counter() {

  const [number,setNumber] = useState(0);
  const [name,setName] = useState('Mehmet');
  useEffect(()=>{
    console.log('number state güncellendi');
  },[number])


  // useEffect(()=>{
  //   console.log('number veya name state güncellendi');
  // },[number, name])

  useEffect(()=>{
    console.log('Component mount edildi');
    const interval = setInterval(() => {
      setNumber((n)=>n+1)
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>arttır</button>
      <hr/>

      <h1>{name}</h1>
      <button onClick={()=>setName("Mete")}>Click</button>

    </div>
  )
}

export default Counter;