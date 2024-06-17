import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { getWeatherDataForCity,getWeatherDataForLocation } from '../api'

export const WeatherContext=createContext(null)

export const useWeather=()=>{
    return useContext(WeatherContext)
}

 



export const WeatherContextProvider=(props)=>{
  const [data,setdata]=useState(null);
   const[searchcity,setsearchcity]=useState("")
   


   const fetchData=async()=>{
    const response=await getWeatherDataForCity(searchcity)
    setdata(response)   
}
   
 const fetchCurrentUserLocationData=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        getWeatherDataForLocation(position.coords.latitude,
            position.coords.longitude
        ).then((data)=>setdata(data))
    })
 }

   return( 
     <WeatherContext.Provider 
     value={{data,searchcity,
     setsearchcity,fetchData
     ,fetchCurrentUserLocationData}}>
        {props.children}
    </WeatherContext.Provider>
  )
}