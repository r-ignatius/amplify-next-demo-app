import GetWeather from "./GetWeather";

export default async function LocationFinderServer() {

    const response = await fetch('https://apip.cc/json');
    const locationData = await response.json();
    console.log(locationData);
    const locationInfo = locationData;

    const location = {
        City: locationInfo.City,
        Latitude: locationInfo.Latitude,
        Longitude: locationInfo.Longitude
    }

    console.log(location)
    console.log('Is this even running?')

    return (
        <>
            <h1>Hello from {locationInfo.City}</h1> 
            <GetWeather location={location} /> 
        </>
    )
} 