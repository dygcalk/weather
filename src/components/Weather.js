import React from 'react';
import { useWeather } from '../context/WeatherContext';

function Weather({ city }) {
  const { weather } = useWeather();
  const getDate = (dt) => {
    let day = new Date(dt * 1000);
    return day.toLocaleDateString('tr-TR', {
      month: 'long',
      weekday: 'long',
      day: '2-digit',
    });
  };
  return (
    <div className="weather-container">
      <h1>{city}</h1>
      <ul className="weather-list">
        {weather.daily.map((desc) => (
          <li key={desc.dt}>
            <div className="list-container">
              {desc.weather.map((one) => (
                <div>
                  <img
                    src={`https://openweathermap.org/img/wn/${one.icon}@2x.png`}
                    alt={one.icon}
                  />
                  <p>{one.description}</p>
                  <br />
                  <span>{getDate(desc.dt)}</span>
                  <br />
                </div>
              ))}
              <p className="temp">
                <span className="day-temp">{parseInt(desc.temp.day)}°</span>|
                <span className="night-temp">{parseInt(desc.temp.night)}°</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Weather;
