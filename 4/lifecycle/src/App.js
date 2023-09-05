import { useState, useEffect } from 'react'


function App() {
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
  }, [])
  return (
    <div className='App'>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>arttır</button>
      <hr/>

      <h1>{name}</h1>
      <button onClick={()=>setName("Mete")}>Click</button>

    </div>
  );
}

export default App;
