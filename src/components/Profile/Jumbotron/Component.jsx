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
import SocialLinks from "../SocialLinks";

/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

const JumbotronComponent = (props) => {
  console.log("test", props);

  return (
    <div className="jumbotron-profile">
      <div className="w-100 row justify-content-center">
        <div className="col-12 col-md-6 col-lg-5">
          <div className="main-image ">
            <img className="image-fluid mw-100" alt="" src="https://amritvin.github.io/c_amritanand/images/me12.jpeg" />
          </div>
        </div>
      </div>

      <div className="w-100 row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="main-name">
            <h1>Amritanand C</h1>
            <div className="subtitle">
              <h4>
                Good, Better and Best.
              </h4>
              <p>
                {
                  `${"\"  Never let it rest, until ur good becomes better and better becomes best ! \""}`
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 row justify-content-center">
        <div className="col-12 text-center d-flex ">
          <div className="social-link-home-wrapper">
            <SocialLinks />
            <div className="underline" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default JumbotronComponent;
