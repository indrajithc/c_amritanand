/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */
import React, { useMemo } from "react";
import PropTypes from "prop-types";

/**  ========= TAG COMPONENTS ========= */
/**  ========= SUB COMPONENT ========= */
/**  ========= MODULE STYLES ========= */
/**  ========= CUSTOM COMPONENTS ========= */
/**  ========= API SERVICE FUNCTIONS ========= */
/**  ========= SVG IMAGE ICON ========= */
/**  ========= UTILS ========= */

const SinglePageAnimation = (props) => {
  const { children, pageIn } = props;

  const animationClass = useMemo(() => (pageIn ? "animate__zoomIn" : "animate__zoomOut"), [pageIn]);

  return (
    <div className={`animate__animated position-fixed overflow-hidden  h-100 w-100 ${animationClass}`}>
      {children}
    </div>
  );
};

SinglePageAnimation.defaultProps = {
  pageIn: false,
};

SinglePageAnimation.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  pageIn: PropTypes.bool,
};

export default SinglePageAnimation;
