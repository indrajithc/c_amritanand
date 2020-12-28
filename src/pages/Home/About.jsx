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
import Education from "../../components/Profile/Education";

/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
import MouseLink from "../../common/components/MouseLink";
import { PageTitle } from "../../common/components/Title";

/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

const About = (props) => {
  const { active } = props;

  return (
    <div className="horizontal-vertical-center">
      <div className="w-100  about-page-wrapper ">
        <div className="d-flex justify-content-center">
          <PageTitle>About me</PageTitle>
        </div>
        <div className="container">
          <div className="row pt-4">
            <div className="col-12 col-md-6">
              <Education />
            </div>
            <div className="col-12 col-md-6">
              test
            </div>
          </div>
        </div>
      </div>

      { active ? (<MouseLink to="/projects" />) : ""}
    </div>
  );
};

About.propTypes = {
  active: PropTypes.bool,
};

About.defaultProps = {
  active: false,
};

export default About;
