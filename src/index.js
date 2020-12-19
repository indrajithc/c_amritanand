/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import reportWebVitals from "./containers/reportWebVitals";

/** Bootstrap v5 */
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("c_amr"),
);

reportWebVitals();
