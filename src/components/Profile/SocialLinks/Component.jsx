/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

import React from "react";
import PropTypes from "prop-types";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

const SocialLinks = (props) => {
  const {
    facebook, github, instagram, linkedin, twitter,
  } = props;

  return (
    <div className="social-links-wrapper">
      <div className="row justify-content-center">

        {
          facebook ? (
            <div className="col">
              <div className="facebook icon-wrapper">
                <a href={facebook}>
                  <i className="bi bi-facebook" />
                </a>
              </div>
            </div>
          ) : ""
        }

        {
          github ? (
            <div className="col">
              <div className="github icon-wrapper">
                <a href={github}>
                  <i className="bi bi-github" />
                </a>
              </div>
            </div>
          ) : ""
        }

        {
          instagram ? (
            <div className="col">
              <div className="instagram icon-wrapper">
                <a href={instagram}>
                  <i className="bi bi-instagram" />
                </a>
              </div>
            </div>
          ) : ""
        }

        {
          linkedin ? (
            <div className="col">
              <div className="linkedin icon-wrapper">
                <a href={linkedin}>
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          ) : ""
        }

        {/* <div className="col">
          <div className="envelope icon-wrapper">
            <a href="so">
              <i className="bi bi-envelope" />
            </a>
          </div>
        </div> */}

        {
          twitter ? (
            <div className="col">
              <div className="twitter icon-wrapper">
                <a href={twitter}>
                  <i className="bi bi-twitter" />
                </a>
              </div>
            </div>
          ) : ""
        }

      </div>
    </div>
  );
};

SocialLinks.defaultProps = {
  facebook: null,
  github: null,
  instagram: null,
  linkedin: null,
  twitter: null,
};

SocialLinks.propTypes = {
  facebook: PropTypes.string,
  github: PropTypes.string,
  instagram: PropTypes.string,
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
};

export default SocialLinks;
