import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "../features/application/applicationSlice";
import myInfoSlice from "../features/myInfo/myInfoSlice";

export const store = configureStore({
  reducer: {
    user: applicationReducer,
    userinfo: myInfoSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
