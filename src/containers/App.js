/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */
import { BrowserRouter as Router } from "react-router-dom";

import RouteView from "./RouteView";

import "../assets/scss/main.scss";

function App() {
  return (
    <Router>
      <RouteView />
    </Router>
  );
}

export default App;
