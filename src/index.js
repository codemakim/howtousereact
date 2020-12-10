import React from "react";
import ReactDOM from "react-dom";
import AppCh03 from "./AppCh03";
import AppCh04 from "./ch04/AppCh04";
import AppCh05 from "./ch05/AppCh05";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from "./App.js";
// import { ParentComponent } from "./ParentComponent";


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ParentComponent/> */}
    <AppCh03/>
    <hr size="5"/>
    <AppCh04/>
    <hr size="5"/>
    <AppCh05/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
