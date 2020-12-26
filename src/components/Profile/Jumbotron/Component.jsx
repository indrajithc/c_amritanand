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
    </div>
  );
};

export default JumbotronComponent;
