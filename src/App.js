import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mb-5">Weather App</h1>
        <Weather defaultCity="New York" />

        <footer className="footer">
          This project was coded by Reni Koulen, is
          <a
            href="https://github.com/renikoulen/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
          {" and is "}
          <a
            href="https://jolly-fermi-3c1a49.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
