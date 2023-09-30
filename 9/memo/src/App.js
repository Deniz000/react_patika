import './App.css';
import { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import ThemeContext from './context/TheemContext';
import Button from './components/Button';

function App() {
  const [number, setNumber] = useState(0);

  

  const increment = useCallback(() => {
    setNumber((prevState) =>  prevState + 1);
  }, []);
  return (
      <ThemeContext.Provider value="dark">
            <Button/>

        </ThemeContext.Provider>

  );
}

function calculateObjext() {
  console.log("calculating");
  for (var i = 0; i <100;i++) {
    console.log("calculated");
  }
  return {name: "objext"}
}
export default App;