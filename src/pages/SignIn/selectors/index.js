import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.auth;

export const isAuthenticatedSelector = createSelector(
  baseSelector,
  (auth) => auth.isAuthenticated
);

export const authErrorsSelector = createSelector(
  baseSelector,
  (auth) => auth.error
);

export const authIsLoadingSelector = createSelector(
  baseSelector,
  (auth) => auth.isLoading
);

export const customerIdSelector = createSelector(
  baseSelector,
  (auth) => auth.profileData._id
);
