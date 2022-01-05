import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let city = "New York";
  let [temperature, setTemperature] = useState(null);

  
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
  }
  const apiKey = "6643c7326a4c2a38838264a28531d97e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1> New York</h1>
        <ul>
          <li>Tuesday, 10:00</li>
          <li>Partly cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy"
            />
            <span className="temperature">{temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
