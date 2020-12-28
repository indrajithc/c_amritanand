/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */

import React, {
  useCallback, useEffect, useMemo, useRef,
} from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

/**  ========= TAG COMPONENTS ========= */
/**  ========= SUB COMPONENT ========= */
import HomePage from "./Home";
import AboutPage from "./About";

/**  ========= MODULE STYLES ========= */
/**  ========= CUSTOM COMPONENTS ========= */
import SinglePageAnimation from "../../common/components/SinglePageAnimation";
import Stars from "../../components/Background/Stars";
import Cloud from "../../components/Background/Cloud";

/**  ========= API SERVICE FUNCTIONS ========= */
/**  ========= SVG IMAGE ICON ========= */
/**  ========= UTILS ========= */
import { pageConstants } from "../../common/utils/constants";

/**  ========= CONTEXT ========= */
import { useSettings } from "../../common/context/siteSettings";

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

  const settingsContext = useSettings();
  const updateSettings = settingsContext && settingsContext[1];

  // local states
  const scrollToRef = useRef(0);

  const pageMap = useMemo(getPageMapper, []);
  const scrollHelperStyle = useMemo(() => ({ minHeight: `${pageMap.length * 100}vh` }), [pageMap]);

  const updateScroll = useCallback((scrollValue) => {
    updateSettings((settingsActions) => ({
      type: settingsActions.UPDATE_SCROLL,
      value: scrollValue,
    }));
  }, [updateSettings]);

  const pageSwitcher = useCallback((pageIndex) => {
    const currentPage = pageMap[pageIndex];
    if (currentPage && page !== currentPage.id) {
      if (currentPage.url) {
        history.push(currentPage.url);
      }
    }
  }, [page, pageMap, history]);

  useEffect(() => {
    if (pageMap) {
      const noOfPage = pageMap.length || 1;
      updateSettings((settingsActions) => ({
        type: settingsActions.UPDATE_HOME_PAGE_COUNT,
        value: noOfPage,
      }));
    }
  }, [pageMap, updateSettings]);

  useEffect(() => {
    if (page) {
      const currentPageIndex = pageMap.findIndex((eachPage) => eachPage.id === page);
      if (currentPageIndex >= 0) {
        const totalPages = pageMap.length;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const eachPageHeight = height / totalPages;
        const currentPageScrollPosition = currentPageIndex * eachPageHeight;
        if (winScroll < currentPageScrollPosition) {
          scrollToRef.current = currentPageScrollPosition;
          window.scrollTo(0, currentPageScrollPosition);
        }
      }
    }
  }, [pageMap, page]);

  useEffect(() => {
    const handleScroll = () => {
      const totalPages = pageMap.length;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const eachPageHeight = height / totalPages;
      const scrolled = winScroll / eachPageHeight;
      const currentPageId = Math.max(0, Math.min(Math.floor(scrolled), (totalPages - 1)));

      if (scrollToRef.current <= winScroll) {
        scrollToRef.current = 0;
        pageSwitcher(currentPageId);
      }
      updateScroll((winScroll / height) * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageMap, pageSwitcher, updateScroll]);

  /**
   * This function is used to map page
   * @param {String} pageId
   * @param {Object} childProps
   */
  const pageFinder = (pageId, childProps) => pageMap.map((eachPage, index) => {
    const { component: PageComponent, id: pageIdIn } = eachPage || {};
    const active = pageIdIn === pageId;
    const indexKey = `eachPage-_-${index}`;
    return (
      <SinglePageAnimation key={indexKey} pageIn={active}>
        <PageComponent
          {...childProps}
          pageMap={pageMap}
          active={active}
        />
      </SinglePageAnimation>
    );
  });

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
    <>
      <Stars />
      <Cloud />
      <Switch>
        <Route exact path={path} component={(props) => <PageMaker {...props} page={pageConstants.HOME} />} />
        <Route exact path={`${path}${pageConstants.ABOUT}`} component={(props) => <PageMaker {...props} page={pageConstants.ABOUT} />} />
      </Switch>
    </>
  );
};

HomeSinglePage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default HomeSinglePage;
