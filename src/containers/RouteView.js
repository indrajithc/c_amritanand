/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";

const RouteView = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default RouteView;
