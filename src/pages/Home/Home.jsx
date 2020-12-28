/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

import React from "react";
// import { Link } from "react-router-dom";
// import { Parallax } from "react-scroll-parallax";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
import { Jumbotron as JumbotronProfile } from "../../components/Profile";

/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
import MouseLink from "../../common/components/MouseLink";

/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

const Home = () => (
  <div className="horizontal-vertical-center">
    <JumbotronProfile />
    <MouseLink to="/about" />
  </div>
);

export default Home;
