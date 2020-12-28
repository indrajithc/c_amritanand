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
  image: "https://amritvin.github.io/c_amritanand/images/me12.jpeg",
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
  education: [
    {
      title: "M.Tech, Cyber Security Systems and Networking, Amrita School of Engineering",
    },
    {
      title: "B.Tech, Computer Science and Engineering, MEA Engineering College, Perinthalmanna",
    },
    {
      title: "Higher Secondary, Nazareth Senior Secondary School, Manjeri, Malappuram, Kerala",
    },
    {
      title: "10th, Amrita Vidyalayam , Manjeri,Malappuram,Kerala",
    },
  ],
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

/** This function is used to return user education details */
const getUserEducation = async () => ({
  success: true,
  data: user.education,
});

export default {
  getUserDetails,
  getUserSocialLinks,
  getUserEducation,
};
