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
import RepeatedClouds from "../../assets/image/clouds3.webp";

/**  ========= UTILS ========= */

const Cloud = () => (
  <div className="cloud-animation-outer">
    <div className="clouds" style={{ backgroundImage: `url(${RepeatedClouds})` }} />
  </div>
);
export default Cloud;
