// import './App.css';
// import { useState, useMemo, useCallback } from 'react';
// import Header from './components/Header';

// // header içinde referanstan dolayı aynı isimde bile yanileme oluyor. 
// //bunu istemiyorusak şu 1: 
// // const data = {name: 'deniz'};
// //senaryo : fonksiyon olsa ve bize bi data veriyo olsaydı 
// function App() {
//   const [number, setNumber] = useState(0);

//   // const data = useMemo(() => {
//   //   return {name: 'DEnİz', number: number};
//   // },[number]) 

//   // const data = useMemo(() => {
//   //   calculateObjext()
//   // }, [number])
 
//   // const data1 = calculateObjext();

//   const increment = useCallback(() => {
//     setNumber((prevState) =>  prevState + 1);
//   }, []);
//   return (
//     <div className="App">
//       {/* <Header number={number < 5 ? 0: number} data={data}/>   */}

//       <Header increment={increment}/>
//       <h1>{number}</h1>

//       <hr/>

//     </div>
//   );
// }

// function calculateObjext() {
//   console.log("calculating");
//   for (var i = 0; i <100;i++) {
//     console.log("calculated");
//   }
//   return {name: "objext"}
// }
// export default App;