import React from 'react'
import { useWeather } from '../contexts/WeatherContext'
function Input(prop) {
  
  const weather=useWeather();
 
    return (
    <div className='input-field'>
      <input placeholder="Search here"
      value={weather.searchcity || ''}
      onChange={(e)=>weather.setsearchcity(e.target.value)}/>
    </div>
  )
}

export default Input
