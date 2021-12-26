import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="mb-5">Weather App</h1>
      <div className="container"></div>
      <footer className="footer">
        This project was coded by Reni Koulen, is
        <a
          href="https://github.com/renikoulen/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>
        {" and is "}
        <a
          href="https://jolly-fermi-3c1a49.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
