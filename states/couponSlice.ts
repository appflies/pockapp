import { CouponType } from "@/@types/coupon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserType | null = null;

const couponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {
        setCoupon: (state, action: PayloadAction<UserType>) => action.payload,
        clearCoupon: () => null
    }
});

export const { setCoupon, clearCoupon } = couponSlice.actions;
export default couponSlice.reducer;