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

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

const PageTitle = (props) => {
  const {
    children, className, underline, ...rest
  } = props;

  return (
    <div className={` page-title  ${className}`} {...rest}>
      <div className="content">
        {children}
      </div>
      {
        underline ? (<div className="title-underline" />) : ""
      }
    </div>
  );
};

PageTitle.defaultProps = {
  className: "",
  underline: true,
};

PageTitle.propTypes = {
  underline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const SectionTitle = (props) => {
  const {
    children, className, underline, ...rest
  } = props;

  return (
    <div className={` section-title  ${className}`} {...rest}>
      <div className="content">
        {children}
      </div>
      {
        underline ? (<div className="title-underline" />) : ""
      }
    </div>
  );
};

SectionTitle.defaultProps = {
  className: "",
  underline: false,
};

SectionTitle.propTypes = {
  underline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export {
  PageTitle,
  SectionTitle,
};
