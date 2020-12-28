/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

import React, { useMemo } from "react";
import PropTypes from "prop-types";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
import SocialLinks from "../SocialLinks/index";
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
  const {
    name, image, title, subtitle,
  } = props;

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
      {
        image ? (
          <div className="w-100 row justify-content-center">
            <div className="col-10 col-md-5 col-lg-4">
              <div
                className="main-image mx-auto transition-linear-01s"
                style={{
                  width: `${50 + scrollValues.imageWith}%`,
                }}
              >
                <img className="image-fluid w-100 mw-100" alt="" src={image} />
              </div>
            </div>
          </div>
        ) : ""
      }

      <div className="w-100 row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="main-name">
            <h1>{name}</h1>
            <div className="subtitle  transition-linear-01s" style={{ zoom: minMaxNumber((1.5 - scrollValues.ratio), 0.25, 1) }}>
              {
                title ? (
                  <h4>{title}</h4>
                ) : ""
              }
              {
                subtitle ? (
                  <p>{subtitle}</p>
                ) : ""
              }
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

JumbotronComponent.defaultProps = {
  image: null,
  title: null,
  subtitle: null,
};

JumbotronComponent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default JumbotronComponent;
