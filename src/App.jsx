import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import { Screen1 } from './components/Screen1';

function App() {
    const inputRef = useRef();
    const [weather, setWeather] = useState(null);


    const SearchCity = async () => {
      const city = inputRef.current.value;
      const apiKey = `afcdedcfa89781a5cf3eec3746755cf4`;
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`
      const apiData = await axios.get(url);
      setWeather(apiData.data);
      console.log(apiData);
    }
    
  return (
    <>
      <div className="container">
        <h1>Previsão do Tempo</h1>
        <div className="controls">
          <input type="text" placeholder='Digite uma cidade...' ref={inputRef}/>
          <button onClick={SearchCity}>Buscar</button>
        </div>
        <div className="screen">
          <Screen1 weather={weather}/>
        </div>
      </div>
    </>
  )
}

export default App
