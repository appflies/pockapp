import { CouponType, OrderState } from "@/@types/coupon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: OrderState = {
    orders: null,
    compra_id: undefined,
    filters: {
        desde: '',
        hasta: '',
        per_page: 10,
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
        setCompra_id: (state, action: PayloadAction<number | undefined>) => {
            state.compra_id = action.payload;
        }
    }
});

export const { setOrders, clearOrders, setFilters, setCompra_id } = orderSlice.actions;
export default orderSlice.reducer;