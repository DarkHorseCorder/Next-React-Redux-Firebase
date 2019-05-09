

import axios from 'axios';
import {FETCH_WEATHER} from './types';

const API_KEY = 'fedcb82471c66fd792b2ab8032de4c3a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city)=> dispatch => {
    console.log('city', city);
    const url = `${ROOT_URL}&q=${city},us`;
    axios.get(url)
        .then (function(response){
            return dispatch({
                type: FETCH_WEATHER,
                payload: response
            })
        })
    
}

export function fetchWeather2(city) {
    console.log('city2', city);
    const url = `${ROOT_URL}&q=${city},us`;
    const request =  axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}