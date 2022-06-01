import React from 'react';
import Container from './components/Container';
import { LocationProvider } from './context/LocationContext';
import { WeatherProvider } from './context/WeatherContext';
import '/Users/duygucalik/Desktop/path/weather/src/App.css';

function App() {
  return (
    <WeatherProvider>
      <LocationProvider>
        <Container />
      </LocationProvider>
    </WeatherProvider>
  );
}

export default App;
