import { configureStore } from "@reduxjs/toolkit";
import { authService } from "@/services/auth.service";
import { orderService } from "@/services/order.service";
import userReducer from "./userSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
    reducer: {
        [authService.reducerPath]: authService.reducer,
        [orderService.reducerPath]: orderService.reducer,
        user: userReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authService.middleware, orderService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
