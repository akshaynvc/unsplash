import { createReducer } from "@reduxjs/toolkit";
import { InitialValuesType } from "./model";
import { isLoading, setData } from "./action";

const initialValue: InitialValuesType = {
  splashData: [],
  isLoading: false,
};
export const splashReducer = createReducer(initialValue, (builder) => {
  builder.addCase(isLoading, (state) => {
    state.isLoading = false;
  });
  builder.addCase(setData, (state, action) => {
    state.splashData = action.payload;
    state.isLoading = true
  });
});
