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
import { SectionTitle } from "../../../common/components/Title";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

const Interests = (props) => {
  const {
    interests,
  } = props;

  /** null check */
  if (!(Array.isArray(interests) && interests.length > 0)) return "";

  return (
    <div className="education-list-wrapper">
      <SectionTitle>Interests</SectionTitle>
      <ul className="list-group list-group-flush">
        {
          interests.map((eachInterests, index) => {
            const { title } = eachInterests || {};
            const keyIn = `edu_-K=ks${index};
            `;
            return (
              <li key={keyIn} className="list-group-item border-0 ps-0 d-flex">
                <i className="bi bi-star me-2" />
                <span>{title}</span>
              </li>
            );
          })
        }
      </ul>

    </div>
  );
};

Interests.defaultProps = {

};

Interests.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Interests;
