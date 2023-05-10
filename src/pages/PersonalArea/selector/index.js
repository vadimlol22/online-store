import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.auth.profileData;

export const personFirstNameSelector = createSelector(
  baseSelector,
  (details) => details.firstName
);

export const personLastNameSelector = createSelector(
  baseSelector,
  (details) => details.lastName
);

export const personEmailSelector = createSelector(
  baseSelector,
  (details) => details.email
);

export const personGenderSelector = createSelector(
  baseSelector,
  (details) => details.gender
);

export const personPhoneSelector = createSelector(
  baseSelector,
  (details) => details.phone
);

export const personRolesSelector = createSelector(
  baseSelector,
  (details) => details.roles[0]
);
