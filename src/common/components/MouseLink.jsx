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
import { Link } from "react-router-dom";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

const MouseLink = (props) => {
  const { to } = props;

  return (
    <Link to={to} className="link-mouse-wrapper">
      <span className="link-mouse" />
    </Link>
  );
};

MouseLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default MouseLink;
