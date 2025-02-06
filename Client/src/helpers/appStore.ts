import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "../helpers/slices/mediaSlice";

const appStore = configureStore({
  reducer: {
    media: mediaReducer,
  },
});

export default appStore;
