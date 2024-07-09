// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slice/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    // Add more reducers here if needed
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
