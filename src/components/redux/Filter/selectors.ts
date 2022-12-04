import { RootState } from "../store";

export const selectFilter = (state: RootState) => state.filter;
export const selectCort = (state: RootState) => state.filter.sort;