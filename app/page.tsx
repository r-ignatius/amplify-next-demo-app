// Page.tsx
import "./../app/app.css";
import ToDo from "./components/ToDo";
import LocationFinderServer from './components/LocationFinderServer'
import  LocationFinderClient  from './components/LocationFinderClient'

export default function App() {

  return (
    <main>
      <LocationFinderServer />
      <LocationFinderClient /> 
      {/* <ToDo/> */}
    </main>
  );
}