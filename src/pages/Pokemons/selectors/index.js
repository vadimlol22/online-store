import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.dataFetching;

export const isLoadingSelector = createSelector(
  baseSelector,
  (dataFetching) => dataFetching.isLoading
);

export const dataSelector = createSelector(
  baseSelector,
  (dataFetching) => dataFetching.data
);

export const dataErrorsSelector = createSelector(
  baseSelector,
  (dataFetching) => dataFetching.errors
);
