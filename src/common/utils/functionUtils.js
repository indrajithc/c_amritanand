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

const toFiled = (value, fixedTo = 2) => (value ? Math.floor(value * (10 ** fixedTo)) / (10 ** fixedTo) : 0);

const minMaxNumber = (value, min, max) => toFiled(Math.min(max, Math.max(min, value)));

const minMaxReducer = (value, min, max, ratio = 1) => {
  const range = max - min;
  const rangeValue = min + (range * (value / ratio));
  return minMaxNumber((rangeValue), min, max);
};

export {
  minMaxNumber,
  minMaxReducer,
};
