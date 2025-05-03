export default async function LocationFinderServer() {

    const response = await fetch('https://apip.cc/json');
    const locationData = await response.json();
    console.log(locationData);
    const locationInfo = locationData;

    return (
        <>
            <h1>Hello from {locationInfo.City}</h1> 
            <h2>The current temperature is: </h2>
        </>
    )
} 