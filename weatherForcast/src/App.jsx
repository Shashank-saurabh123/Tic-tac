import React, { useEffect, useState } from 'react';
import { useWeather } from './contexts/WeatherContext';
import Card from './components/Card';
import Input from './components/Input';
import Btn from './components/Btn';
import './App.css';

function App() {
    const weather = useWeather();

    useEffect(() => {
        weather.fetchCurrentUserLocationData();
    }, []);

    return (
        <>
            <h1>Weather Forecast</h1>
            <Input />
            <Btn onClick={weather.fetchData} value="Search" />
            <Card />
            <Btn onClick={weather.fetchCurrentUserLocationData} value="Refresh" />
        </>
    );
}

export default App;
