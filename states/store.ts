import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import filterReducer from "./filterSlice";
import couponReducer from './couponSlice';
import orderReducer from "./orderSlice";
import surveyReducer from "./surveySlice";
import feedbackReducer from "./feedbackSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        coupon: couponReducer,
        filter: filterReducer,
        order: orderReducer,
        survey: surveyReducer,
        feedback: feedbackReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
