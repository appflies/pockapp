import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/states/store";
import { CouponType } from "@/@types/coupon";
import { PaginatedResponse } from "/@/types/pagination";

export const couponService = createApi({
  reducerPath: "couponService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nicoservices.clobitech.com/cupon/buscar",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      const sucursal = (getState() as RootState).user.sucursal;
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json; charset=UTF-8");
      headers.set("sucursal", sucursal);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCoupons: builder.query<PaginatedResponse, { desde: string, hasta: string, per_page: number, page: number }>({
      query: ({ desde, hasta, per_page, page }) => ({
        url: `/${desde}/${hasta}/${per_page}/${page}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCouponsQuery } = couponService;
