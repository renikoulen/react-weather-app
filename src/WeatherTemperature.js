import React from "react";

export default function WeatherTemperature(props) {
  

  
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          °C 
        </span>
      </span>
    );
}
