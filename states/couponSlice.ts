import { CouponType, CouponState } from "@/@types/coupon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CouponState = {
    coupons: null,
    cupon_id: undefined,
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
        setCoupon: (state, action: PayloadAction<UserType>) => {
            state.coupons = action.payload;
        },
        clearCoupon: () => null,
        setCouponId: (state, action: PayloadAction<number>) => {
            state.cupon_id = action.payload;
        },
        setFilters: (state, action: PayloadAction<Partial<CouponState["filters"]>>) => {
            state.filters = { ...state.filters, ...action.payload };
        }
    }
});

export const { setCoupon, clearCoupon, setCouponId, setFilters } = couponSlice.actions;
export default couponSlice.reducer;