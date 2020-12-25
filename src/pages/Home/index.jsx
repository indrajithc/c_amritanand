/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

import React, { useCallback, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

/**  ========= TAG COMPONENTS ========= */
/**  ========= SUB COMPONENT ========= */
import HomePage from "./Home";
import AboutPage from "./About";

/**  ========= MODULE STYLES ========= */
/**  ========= CUSTOM COMPONENTS ========= */
/**  ========= API SERVICE FUNCTIONS ========= */
/**  ========= SVG IMAGE ICON ========= */

/**  ========= UTILS ========= */
import { pageConstants } from "../../common/utils/constants";

const getPageMapper = () => {
  const pageMap = [
    {
      id: pageConstants.HOME,
      component: HomePage,
      url: "/",
    },
    {
      id: pageConstants.ABOUT,
      component: AboutPage,
      url: `/${pageConstants.ABOUT}`,
    },
  ];

  return (pageMap);
};

const PageMaker = (props) => {
  const { page, history } = props;

  const pageMap = useMemo(getPageMapper, []);
  const scrollHelperStyle = useMemo(() => ({ minHeight: `${pageMap.length * 100}vh` }), [pageMap]);

  const pageSwitcher = useCallback((pageIndex) => {
    const currentPage = pageMap[pageIndex];
    if (currentPage && page !== currentPage.id) {
      if (currentPage.url) {
        history.push(currentPage.url);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalPages = pageMap.length;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const eachPageHeight = height / totalPages;
      const scrolled = winScroll / eachPageHeight;
      const currentPageId = Math.max(0, Math.min(Math.floor(scrolled), (totalPages - 1)));
      pageSwitcher(currentPageId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageMap, pageSwitcher]);

  /**
   * This function is used to map page
   * @param {String} pageId
   * @param {Object} childProps
   */
  const pageFinder = (pageId, childProps) => {
    const CurrentPageComponent = (pageMap.find((eachPage) => eachPage.id === pageId) || {}).component || null;
    return CurrentPageComponent ? <CurrentPageComponent {...childProps} /> : "";
  };

  return (
    <>
      <div className="home-page-wrapper">
        {pageFinder(page, props)}
      </div>
      <div className="scroll-helper" style={scrollHelperStyle} />
    </>
  );
};

PageMaker.propTypes = {
  page: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const HomeSinglePage = ({ match }) => {
  const { path } = match || {};
  return (
    <Switch>
      <Route exact path={path} component={(props) => <PageMaker {...props} page={pageConstants.HOME} />} />
      <Route exact path={`${path}${pageConstants.ABOUT}`} component={(props) => <PageMaker {...props} page={pageConstants.ABOUT} />} />
    </Switch>
  );
};

HomeSinglePage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default HomeSinglePage;
