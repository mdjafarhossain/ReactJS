import React, { useState } from "react";
import './weather.css';
import WeatherCard from "./WeatherCard";


function WeatherComponent(){

    // const weatherData= ([
        const [weatherData, setWeatherData] = useState([
        { day: "Monday", condition: "Sunny", temperature: "22°C" },
         { day: "Tuesday", condition: "Windy", temperature: "18°C" },
         { day: "Wednesday", condition: "Rainy", temperature: "15°C" }
     ]
     );
        
       
        return (
            <div>
            {weatherData.map((weather, index) => (
            <WeatherCard
            key={index}
            day={weather.day}
            condition={weather.condition}
            temperature={weather.temperature}
            />
            ))}
            </div>
            );

}

export default WeatherComponent;