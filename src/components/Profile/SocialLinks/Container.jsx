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
import { getUserSocialLinks } from "./service";

const SocialLinksContainer = () => {
  const [userSocialLInks, setUserSocialLinks] = useState({});

  useEffect(() => {
    getUserSocialLinks().then((data) => {
      if (data) {
        setUserSocialLinks(data);
      }
    });
  }, []);

  return (
    <Component
      facebook={userSocialLInks.facebook}
      github={userSocialLInks.github}
      instagram={userSocialLInks.instagram}
      linkedin={userSocialLInks.linkedin}
      twitter={userSocialLInks.twitter}
    />
  );
};

export default SocialLinksContainer;
