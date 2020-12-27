/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

import React, { useMemo } from "react";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
import SocialLinks from "../SocialLinks";
import Copyright from "../Copyright";

/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

/**  ========= CONTEXT ========= */
import { useSettings } from "../../../common/context/siteSettings";
import { minMaxNumber, minMaxReducer } from "../../../common/utils/functionUtils";

const JumbotronComponent = (props) => {
  console.log("test", props);

  const [settings] = useSettings();

  const scrollValues = useMemo(() => {
    const { scroll, homePageCount } = settings;
    const pageScrollFactor = (((scroll) || 0) / (100 / homePageCount));

    const imageWith = 50 * pageScrollFactor;

    return ({
      imageWith: Math.max(0, Math.min(imageWith, 50)),
      ratio: pageScrollFactor,
    });
  }, [settings]);

  return (
    <div className="jumbotron-profile">
      <div className="w-100 row justify-content-center">
        <div className="col-10 col-md-5 col-lg-4">
          <div
            className="main-image mx-auto transition-linear-01s"
            style={{
              width: `${50 + scrollValues.imageWith}%`,
            }}
          >
            <img className="image-fluid w-100 mw-100" alt="" src="https://amritvin.github.io/c_amritanand/images/me12.jpeg" />
          </div>
        </div>
      </div>

      <div className="w-100 row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="main-name">
            <h1>Amritanand C</h1>
            <div className="subtitle  transition-linear-01s" style={{ zoom: minMaxNumber((1.5 - scrollValues.ratio), 0.25, 1) }}>
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
          <div className="social-link-home-wrapper  transition-linear-01s" style={{ zoom: minMaxReducer((minMaxNumber((1.3 - scrollValues.ratio), 0, 1)), 0.5, 1) }}>
            <SocialLinks />
            <div className="underline" />
            <Copyright />
          </div>
        </div>
      </div>

    </div>
  );
};

export default JumbotronComponent;
