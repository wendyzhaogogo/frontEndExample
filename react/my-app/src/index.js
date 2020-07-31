import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { useState } from "react";
console.log(useState);
function TestComp() {
  const [n, setN] = useState(0);
  setTimeout(() => {
    setN(2);
  }, 2000);
  return <div>{n}</div>;
}

ReactDOM.render(
  <React.StrictMode>
    <TestComp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
