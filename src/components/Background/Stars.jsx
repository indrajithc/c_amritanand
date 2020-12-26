/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */
import React from "react";

/**  ========= TAG COMPONENTS ========= */
/**  ========= SUB COMPONENT ========= */
/**  ========= MODULE STYLES ========= */
/**  ========= CUSTOM COMPONENTS ========= */
/**  ========= API SERVICE FUNCTIONS ========= */
/**  ========= SVG IMAGE ICON ========= */
import BackgroundStars from "../../assets/image/stars.webp";
import BackgroundTwinkling from "../../assets/image/twinkling.webp";

/**  ========= UTILS ========= */

const Stars = () => (
  <div className="star-background">
    <div style={{ backgroundImage: `url(${BackgroundStars})` }} className="stars" />
    <div className="twinkling" style={{ backgroundImage: `url(${BackgroundTwinkling})` }} />
  </div>
);
export default Stars;
