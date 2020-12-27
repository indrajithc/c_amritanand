/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */
import React, {
  createContext, useCallback, useContext, useReducer,
} from "react";
import PropTypes from "prop-types";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

const SettingsContext = createContext();

const initialState = {
  scroll: 0,
  homePageCount: 1,
};

const actions = {
  UPDATE_SCROLL: "UPDATE_SCROLL",
  UPDATE_HOME_PAGE_COUNT: "UPDATE_HOME_PAGE_COUNT",
};

const settingsReducer = (state, action) => {
  const { type, value } = action;

  switch (type) {
    case actions.UPDATE_SCROLL: {
      return { ...state, scroll: value };
    }
    case actions.UPDATE_HOME_PAGE_COUNT: {
      return { ...state, homePageCount: value };
    }
    default: {
      throw new Error(`Error code X0000 : Unhandled action type: ${type}`);
    }
  }
};

const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <SettingsContext.Provider value={[state, dispatch]}>
      {children}
    </SettingsContext.Provider>
  );
};

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("Error code X0001");
  }
  const [state, dispatch] = context;

  const dispatcher = useCallback((dispatchData) => {
    const dispatchState = typeof dispatchData === "function" ? dispatchData(actions) : dispatchData;
    if (dispatchState && dispatchState.type && actions[dispatchState.type]) {
      dispatch(dispatchState);
    }
  }, [dispatch]);

  return [state, dispatcher, actions];
};

export {
  SettingsProvider, useSettings, actions,
};
