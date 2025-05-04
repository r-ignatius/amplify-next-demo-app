'use client';
import { useState, useEffect } from 'react';
import ConvertTemp from './ConvertTemp';

export default function GetWeather({location}) {
    const [ temperature, setTemperature ] = useState({
        current: 0,
        high: 0,
        low: 0
    });

    const fetchWeather = async () => {
        try {
            const currentTempUrl = `&product=civil&output=json`;
            const highLowTempUrl = `&product=civillight&output=json`;

            const weatherUrl = `http://www.7timer.info/bin/api.pl?`
                + `lon=${location.Longitude}`
                + `&lat=${location.Latitude}`

            const currentWeatherResponse = await fetch(weatherUrl + currentTempUrl);
            const currentWeatherData = await currentWeatherResponse.json();
            console.log(currentWeatherData);

            const highLowWeatherResponse = await fetch(weatherUrl + highLowTempUrl);
            const highLowWeatherData = await highLowWeatherResponse.json();
            console.log(highLowWeatherData);

            setTemperature({
                current: ConvertTemp(currentWeatherData.dataseries[0].temp2m),
                high: ConvertTemp(highLowWeatherData.dataseries[0].temp2m.max),
                low: ConvertTemp(highLowWeatherData.dataseries[0].temp2m.min)
            })
        } catch (error) {
            console.error('Error: ', error)
        }
    }

    useEffect(() => {
       fetchWeather();
    }, [location])
    
    return (
      <>
        <h3>The current temperature is {temperature.current.toFixed(0)} </h3>
        <h3> The temperature today will remain between {temperature.low.toFixed(0)} and {temperature.high.toFixed(0)}</h3>
      </>
    )
}