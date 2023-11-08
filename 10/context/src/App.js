import React from 'react';
import './App.css';
import Container from './components/Container';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import WeatherComponent from './WeatherApi/WeatherComponent';

function App() {
  return (
   <> <WeatherComponent/>
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
