import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.auth;

const isAuthenticatedSelector = createSelector(
  baseSelector,
  (auth) => auth.isAuthenticated
);

export default isAuthenticatedSelector;
