import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header/Header";
import reportWebVitals from "./reportWebVitals";
import { DataDt } from "./SliderDt/DataDt";
import { DataMb } from "./SliderDt/DataMb";
import SliderDt from "./SliderDt/SliderDt";

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <div className="menu">
        <Header />
      </div>
      <div className="catalogo">
        <div className="desktop">
          <SliderDt slides={DataDt} />
        </div>
        <div className="mobile">
          <SliderDt slides={DataMb} />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
