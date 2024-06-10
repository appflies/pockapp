import { CouponType, OrderState } from "@/@types/coupon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: OrderState = {
    orders: null,
    telephone: undefined,
    total: undefined,
    filters: {
        desde: '',
        hasta: '',
        per_page: 50,
        page: 1,
    }
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrders: (state, action: PayloadAction<OrderType[]>) => {
            state.orders = action.payload;
        },
        clearOrders: (state) => {
            state.orders = null;
        },
        setFilters: (state, action: PayloadAction<Partial<OrderState["filters"]>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setTelephone: (state, action: PayloadAction<number | undefined>) => {
            state.telephone = action.payload;
        },
         setTotal: (state, action: PayloadAction<number | undefined>) => {
            state.total = action.payload;
        }
    }
});

export const { setOrders, clearOrders, setFilters, setTelephone, setTotal } = orderSlice.actions;
export default orderSlice.reducer;