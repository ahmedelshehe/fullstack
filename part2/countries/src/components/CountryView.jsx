import { useState } from "react";
import weatherService from "../services/weather";
const CountryView = ({country}) =>{
    const [weather,setWeather]=useState(null);
    const iconUrl ='';
        weatherService.getWeather(country.capital[0]).then((weather)=>{
            setWeather(weather);
            iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        })
        
    return (
        <>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h3>Languages</h3>
            <ul>
                {Object.values(country.languages).map((language,i) => <li key={i}>{language}</li>)}
            </ul>
            <img src={country.flags.png !==null ? country.flags.png : country.flags.svg ? country.flags.svg : "" } alt={country.flags.alt}/>
            weather ? (
                <h1>Weather in {country.capital[0]}</h1>
                <p>temprature {weather.main.temp} Celisuis</p>
                <img src={iconUrl} alt={weather.weather[0].main}/>
                <p>wind {weather.wind.speed} m/s</p>
            ) : <p>No Weather data</p>
        </>
    )
}
export default CountryView;