import axios from "axios";
const baseUrl ="https://api.openweathermap.org/data/2.5/weather?"

const getWeather=(capital)=>{
    const request=axios.get(`${baseUrl}q=${capital.toLowerCase()}&appid=${process.env.REACT_APP_APIKEY}&units=metric`);
    return request.then(response => response.data).catch(error => {
        throw(error)
      })
    }

export default {getWeather}