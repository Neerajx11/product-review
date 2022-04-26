import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import productReducer from "./features/productSlice";
import reviewReducer from "./features/reviewSlice";
import { localStorageMiddleware } from "./middleware/localStorageMiddleware";

const store = configureStore({
  reducer: {
    product: productReducer,
    review: reviewReducer,
  },
  middleware: [...getDefaultMiddleware(), localStorageMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//use them instead of usual useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
