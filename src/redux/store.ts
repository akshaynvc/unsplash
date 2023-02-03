import { configureStore} from "@reduxjs/toolkit";
import { splashReducer } from "./reducer";

const store = configureStore({
  reducer: splashReducer
});

export default store;
