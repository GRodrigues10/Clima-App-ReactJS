import './Screen.css'
import './Mediaquery.css'
export function Screen1({ weather }) {
    // Verifique se weather e suas propriedades estão disponíveis
    // if (!weather || !weather.weather || weather.weather.length === 0) {
    //   return <p>Digite uma cidade para ver a previsão do tempo.</p>;
    // }
    console.log(weather)
  
    return (
      <>
        <div className='container-details'>
          <h2>{weather.name}</h2>
          <div className = "details">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="imagem"
            />
          <p className = "temperature">{Math.round(weather.main.temp)}°C</p>
          </div>
          <p className='description'>{weather.weather[0].description}</p>
          <div className = "more-details">
            <p>Sesação Térmica: {Math.round(weather.main.feels_like)}°C</p>
            <p>Umidade: {weather.main.humidity}</p>
            <p>Pressão: {weather.main.pressure}</p>
          </div>
        </div>
      </>
    );
  }
