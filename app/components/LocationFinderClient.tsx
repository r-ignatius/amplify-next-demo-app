'use client';
import { useState, useEffect } from "react"

export default function LocationFinderClient() {
    const  [ locationData, setLocationData  ] = useState({
        City: '',
        Latitude: '',
        Longitude: ''
    });
    const [ currentTemp, setCurrentTemp ] = useState(0);

    const getWeather = async () => { 
        try {
            const locationResponse = await fetch('https://apip.cc/json');
            const location = await locationResponse.json();
            console.log(location);
          
            setLocationData({
                City: location.City,
                Latitude: location.Latitude,
                Longitude: location.Longitude
            });
          
            const weatherUrl = `http://www.7timer.info/bin/api.pl?`
                + `lon=${location.Longitude}`
                + `&lat=${location.Latitude}`
                + `&product=civil`
                + `&output=json`;

            const weatherResponse = await fetch(weatherUrl);
            const weatherData = await weatherResponse.json();
            console.log(weatherData);

            setCurrentTemp(((weatherData.dataseries[0].temp2m)* (9/5)) + 32);

            const fahrenheitTemp = (temperature * (9/5)) + 32;

        } catch (error) {
            console.error('Error: ', error)
        }

    };

    useEffect(() => {
        getWeather();
    }, [])

 
    return (
        <>
            <h1>Hello from {locationData.City}</h1>
            <h2>The current temperature is {currentTemp}°F </h2>
        </>
    )
}
