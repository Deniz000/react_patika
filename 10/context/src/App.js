import React, { useState } from 'react';
import './App.css';
import Container from './components/Container';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

function App() {

  const [weather, setWeather] = useState(null)
   React.useEffect(() => {

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=36.9863599&lon=35.3252861&appid=883489dfb6916d456613cafaa7dda332')
    .then(res => res.json())
    .then(data => setWeather(data))
},[])
  return (
    <code>{JSON.stringify(weather.weather[0].main)}</code>

    // <ThemeProvider>
    //   <UserProvider>
    //     <Container />
    //   </UserProvider>
    // </ThemeProvider>
  );
}

export default App;
