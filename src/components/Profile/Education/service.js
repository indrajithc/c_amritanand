/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

import dummyData from "../../../api/dummy-data/user";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

const getUserEducation = async () => {
  const response = await dummyData.getUserEducation();

  if (response && response.success && response.data) {
    return response.data;
  }
  return null;
};

const dummy = null;

export {
  getUserEducation,
  dummy,
};
