/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

import React from "react";
import PropTypes from "prop-types";

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

const Home = (props) => {
  const { active } = props;

  return (
    <div className="horizontal-vertical-center">
      <JumbotronProfile />
      { active ? (<MouseLink to="/about" />) : ""}

    </div>
  );
};

Home.propTypes = {
  active: PropTypes.bool,
};

Home.defaultProps = {
  active: false,
};

export default Home;
