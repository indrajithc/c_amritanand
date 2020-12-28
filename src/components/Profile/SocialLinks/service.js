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

const getUserSocialLinks = async () => {
  const response = await dummyData.getUserSocialLinks();

  if (response && response.success && response.data) {
    return response.data;
  }
  return null;
};

const dummy = null;

export {
  getUserSocialLinks,
  dummy,
};
