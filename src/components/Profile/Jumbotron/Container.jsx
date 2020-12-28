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
import { getUserData } from "./service";

const JumbotronContainer = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserData().then((data) => {
      if (data) {
        setUserData(data);
      }
    });
  }, []);

  return (
    <Component
      name={`${userData.firstName || ""} ${userData.lastName || ""}`}
      image={userData.image}
      title={userData.title}
      subtitle={userData.subtitle}
    />
  );
};

export default JumbotronContainer;
