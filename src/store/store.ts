import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";

// {cart: [], auth: {user: null, loading: false, error: ''}}
const store = configureStore({
  reducer: { cart: cartReducer, auth: authReducer },
});

// Types of root state and dispatch
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
