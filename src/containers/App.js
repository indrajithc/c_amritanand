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

import { SettingsProvider } from "../common/context/siteSettings";

import "../assets/scss/main.scss";

function App() {
  return (
    <Router>
      <SettingsProvider>
        <RouteView />
      </SettingsProvider>
    </Router>
  );
}

export default App;
