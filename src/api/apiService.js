/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 * @author Indrajith C
 *
 */
import axios from "axios";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

// Add a request interceptor
axios.interceptors.request.use((config) => config,
  (error) => Promise.reject(error));

// Add a response interceptor
axios.interceptors.response.use((response) => response,
  (error) => Promise.reject(error));

export default axios;
