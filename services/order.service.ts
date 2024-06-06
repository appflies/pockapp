import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/states/store";
import { OrderType } from "@/@types/order";
import { PaginatedResponse } from "/@/types/pagination";

export const orderService = createApi({
  reducerPath: "orderService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nicoservices.clobitech.com/pago/buscar",
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
    getOrders: builder.query<PaginatedResponse, { desde: string, hasta: string, per_page: number, page: number }>({
      query: ({ desde, hasta, per_page, page }) => ({
        url: `/${desde}/${hasta}/${per_page}/${page}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetOrdersQuery } = orderService;
