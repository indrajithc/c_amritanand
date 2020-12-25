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

import HomeSinglePage from "../pages/Home";

const RouteView = () => (
  <Switch>
    <Route path="/" component={HomeSinglePage} />
  </Switch>
);

export default RouteView;
