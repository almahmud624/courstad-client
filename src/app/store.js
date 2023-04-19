import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import userReducer from "../features/user/userSlice";
import courseReducer from "../features/courses/courseSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    course: courseReducer,
  },
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares().concat(apiSlice.middleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});
