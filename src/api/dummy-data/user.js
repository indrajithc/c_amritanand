/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

const user = {
  id: "amritvin",
  firstName: "Amritanand",
  lastName: "C",
  email: "c.amritanand@gmail.com",
  title: "Good, Better and Best.",
  subtitle: "\" Never let it rest, until ur good becomes better and better becomes best ! \"",
  socialLinks: {
    facebook: "https://www.facebook.com/c.amritanand",
    github: "https://www.github.com/amritvin",
    instagram: "https://www.instagram.com/vin_amz/",
    linkedin: "https://www.linkedin.com/in/amritanand-c-19a94823/",
    twitter: "https://twitter.com/amritvin",
  },
};

/** This function used to return user static data */
const getUserDetails = async () => ({
  success: true,
  data: user,
});

/** This function is used to return user social link */
const getUserSocialLinks = async () => ({
  success: true,
  data: user.socialLinks,
});

export default {
  getUserDetails,
  getUserSocialLinks,
};
