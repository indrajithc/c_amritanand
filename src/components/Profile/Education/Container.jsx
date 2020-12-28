/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

import { useEffect, useState } from "react";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
import Component from "./Component";

/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= API SERVICE ========= */
import { getUserEducation } from "./service";

const EducationContainer = () => {
  const [education, setUserEducation] = useState([]);

  useEffect(() => {
    getUserEducation().then((data) => {
      if (Array.isArray(data)) {
        setUserEducation(data);
      }
    });
  }, []);

  return (
    <Component
      education={education}
    />
  );
};

export default EducationContainer;
