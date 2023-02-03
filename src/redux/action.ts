import { createAction } from "@reduxjs/toolkit";
import { splashDataType } from "./model";

const ACTION_TYPES = {
  UNFULLFILLED: "UNFULLFILLED",
  FULLFILLED: "FULLFILLED",
};

const isLoading = createAction<boolean>(ACTION_TYPES.UNFULLFILLED);
const setData = createAction<splashDataType[]>(ACTION_TYPES.FULLFILLED);

export { isLoading, setData };
