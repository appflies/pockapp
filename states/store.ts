import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import filterReducer from "./filterSlice";
import couponReducer from './couponSlice';
import orderReducer from "./orderSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        coupon: couponReducer,
        filter: filterReducer,
        order: orderReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
