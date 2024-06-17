const baseURL= "https://api.weatherapi.com/v1/current.json?key=b6817ea5e043449ab8a182116241706"



export const  getWeatherDataForCity=async(city)=>{
console.log(city);
    const response=await fetch(`${baseURL}&q=${city}&aqi=yes`)

return await response.json()
}





export const  getWeatherDataForLocation=async(lat,lon)=>{
    const response=await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
     return await response.json()

}



// export const getWeatherDataForLocation = async (lat, lon) => {
//     console.log("Latitude:", lat, "Longitude:", lon);
//     const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
//     return await response.json();
// };




