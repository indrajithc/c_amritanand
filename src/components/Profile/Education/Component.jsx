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

const Education = (props) => {
  const {
    education,
  } = props;

  /** null check */
  if (!(Array.isArray(education) && education.length > 0)) return "";

  return (
    <div className="education-list-wrapper">
      <SectionTitle>Education</SectionTitle>
      <ul className="list-group list-group-flush">
        {
          education.map((eachEducation, index) => {
            const { title } = eachEducation || {};
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

Education.defaultProps = {

};

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Education;
