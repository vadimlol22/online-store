import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.auth.profileData;

export const personFirstNameSelector = createSelector(
  baseSelector,
  (auth) => auth.firstName
);

export const personLastNameSelector = createSelector(
  baseSelector,
  (auth) => auth.lastName
);

export const personEmailSelector = createSelector(
  baseSelector,
  (auth) => auth.email
);

export const personGenderSelector = createSelector(
  baseSelector,
  (auth) => auth.gender
);

export const personPhoneSelector = createSelector(
  baseSelector,
  (auth) => auth.phone
);

export const personRolesSelector = createSelector(
  baseSelector,
  (auth) => auth.roles[0]
);
