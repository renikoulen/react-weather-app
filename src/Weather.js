import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ reply: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      reply: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      date: "Tuesday 10:00",
      wind: Math.round(response.data.wind.speed * 3.6),
      city: response.data.name,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.reply) {
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
          <h1> {weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <img
                src={weatherData.iconUrl}
                //src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt={weatherData.description}
              />
              <span className="temperature">{weatherData.temperature}</span>
              <span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6643c7326a4c2a38838264a28531d97e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
