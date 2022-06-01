import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from '../context/LocationContext';
import { useWeather } from '../context/WeatherContext';
import Select from './Select';
import Weather from './Weather';
function Container() {
  const { lat, lon, setLat, setLon } = useLocation();
  const { weather, setWeather } = useWeather();
  const [city, setCity] = useState('Adana');
  const getLat = async (city) => {
    const api = '594a1f1c9938e99ace3414fcd15263b8';
    await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api}`
      )
      .then((res) => setLat(res.data.map((desc) => desc.lat)));
  };

  const getLon = async (city) => {
    const api = '594a1f1c9938e99ace3414fcd15263b8';
    await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api}`
      )
      .then((res) => setLon(res.data.map((desc) => desc.lon)));
  };
  const getWeather = async (late, long) => {
    const api = '594a1f1c9938e99ace3414fcd15263b8';
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${late}&lon=${long}&units=metric&lang=tr&appid=${api}`
      )
      .then((res) => setWeather(res.data));
  };

  useEffect(() => {
    async function fetchData() {
      await getLat(city);
      await getLon(city);
      await getWeather(lat, lon);
    }
    fetchData();
  }, [city]);

  if (!weather) {
    return <p>Yükleniyor...</p>;
  }
  return (
    <div className="container">
      <Select setCity={setCity} />
      <Weather city={city} />
    </div>
  );
}

export default Container;
