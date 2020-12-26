/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

import React from "react";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

const SocialLinks = (props) => {
  console.log(props);

  return (
    <div className="social-links-wrapper">
      <div className="row justify-content-center">
        <div className="col">
          <div className="facebook icon-wrapper">
            <a href="so">
              <i className="bi bi-facebook" />
            </a>
          </div>
        </div>

        <div className="col">
          <div className="github icon-wrapper">
            <a href="so">
              <i className="bi bi-github" />
            </a>
          </div>
        </div>

        <div className="col">
          <div className="instagram icon-wrapper">
            <a href="so">
              <i className="bi bi-instagram" />
            </a>
          </div>
        </div>

        <div className="col">
          <div className="linkedin icon-wrapper">
            <a href="so">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>

        <div className="col">
          <div className="envelope icon-wrapper">
            <a href="so">
              <i className="bi bi-envelope" />
            </a>
          </div>
        </div>

        <div className="col">
          <div className="twitter icon-wrapper">
            <a href="so">
              <i className="bi bi-twitter" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SocialLinks;
