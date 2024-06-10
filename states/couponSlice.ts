import { CouponType, CouponState } from "@/@types/coupon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CouponState = {
    coupons: null,
    telephone: undefined,
    date: undefined,
    name: undefined,
    link: undefined,
    total: 0,
    filters: {
        desde: '',
        hasta: '',
        per_page: 10,
        page: 1,
    }
};

const couponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {
        setCoupon: (state, action: PayloadAction<CouponType[]>) => {
            state.coupons = action.payload;
        },
        clearCoupon: (state) => {
            state.coupons = null;
        },
        setTelephone: (state, action: PayloadAction<string>) => {
            state.telephone = action.payload;
        },
        setDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setLink: (state, action: PayloadAction<string>) => {
            state.link = action.payload;
        },
        setFilters: (state, action: PayloadAction<Partial<CouponState["filters"]>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setTotal: (state, action: PayloadAction<number | undefined>) => {
            state.total = action.payload;
        }
    }
});

export const { setCoupon, clearCoupon, setTelephone, setFilters, setTotal, setDate, setName, setLink } = couponSlice.actions;
export default couponSlice.reducer;
