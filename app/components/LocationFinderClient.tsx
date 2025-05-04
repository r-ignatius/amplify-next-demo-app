'use client';
import { useState, useEffect } from "react";
import GetWeather from './GetWeather';
export default function LocationFinderClient() {
    const  [ locationData, setLocationData  ] = useState({
        City: '',
        Latitude: '',
        Longitude: ''
    });

    const getLocationInfo = async () => { 

        try {
            const locationResponse = await fetch('https://apip.cc/json');
            const location = await locationResponse.json();
            console.log(location);
          
            setLocationData({
                City: location.City,
                Latitude: location.Latitude,
                Longitude: location.Longitude
            });
        } catch (error) {
            console.error('Error: ', error)
        }
    };
    useEffect(() => {
        getLocationInfo();
    }, [])

 
    return (
        <>
            <h1>Hello from {locationData.City}</h1>
            <GetWeather location={locationData} />
        </>
    )
}
