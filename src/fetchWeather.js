
import axios from 'axios';


const URL='http://api.openweathermap.org/data/2.5/weather';
const API_Key='b17f7e1fa988f93d725139581b2d034a'; 
export const fetchWeather=async (query)=>{
    const {data} =await axios.get(URL,{
  params:{
      q:query,
      units:'metric',
      APPID:API_Key,


  }
  
    });
    return data;
}
export default fetchWeather;


