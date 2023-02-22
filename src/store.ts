import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import counterReducer from "./redux/slices/counterSlice/counterSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer },
  });
}

const store = makeStore();
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: false });
