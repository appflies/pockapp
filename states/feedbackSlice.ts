import { CouponType, CouponState } from "@/@types/coupon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FeedbackState = {
    coupons: null,
    telephone: undefined,
    date: undefined,
    name: undefined,
    cupon_no: undefined,
    total: 0,
    filters: {
        desde: '',
        hasta: '',
        per_page: 50,
        page: 1,
    }
};

const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        setCoupon: (state, action: PayloadAction<FeedbackType[]>) => {
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
        setCouponNo: (state, action: PayloadAction<string>) => {
            state.cupon_no = action.payload;
        },
        setFilters: (state, action: PayloadAction<Partial<FeedbackState["filters"]>>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setTotal: (state, action: PayloadAction<number | undefined>) => {
            state.total = action.payload;
        }
    }
});

export const { setCoupon, clearCoupon, setTelephone, setFilters, setTotal, setDate, setName, setCouponNo } = feedbackSlice.actions;
export default feedbackSlice.reducer;