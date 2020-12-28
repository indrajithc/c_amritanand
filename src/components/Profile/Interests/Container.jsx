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
import { getUserInterests } from "./service";

const InterestsContainer = () => {
  const [interests, setUserInterests] = useState([]);

  useEffect(() => {
    getUserInterests().then((data) => {
      if (Array.isArray(data)) {
        setUserInterests(data);
      }
    });
  }, []);

  return (
    <Component
      interests={interests}
    />
  );
};

export default InterestsContainer;
