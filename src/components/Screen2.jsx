import './Screen.css'
import './Mediaquery.css'
export function Screen2({weather2}){

    let dailyForecast = {};
    for(let forecast of weather2.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        if(!dailyForecast[date]){
            dailyForecast[date] = forecast;
        }

    }

    const fiveDays = Object.values(dailyForecast).slice(1, 6);
    
    const convertDate = (date) => {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday:'short', day:'2-digit'});
        
        return newDate;
    }

    console.log(dailyForecast)
    return(
    <>

        <div className="container-details2">
            <div>
                <h3>Previsão dos próximos 5 dias</h3>
            </div>

            <div className='fiveDays'>
                {fiveDays.map(forecast => <div key={forecast.dt} className='box'> 
                    <p>{convertDate(forecast)}</p>
                <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="imagem" />
                <p>{forecast.weather[0].description}</p>
                <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C max</p>
                
                    </div>)}
            </div>
           
        </div>
    
    </>)
}
