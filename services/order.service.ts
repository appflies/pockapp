import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/states/store";
import { OrderType, PaginatedOrdersResponse } from "@/@types/order";

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
        getOrders: builder.query<PaginatedOrdersResponse, { desde: string, hasta: string, per_page: number, page: number }>({
            query: ({ desde, hasta, per_page, page }) => ({
                url: `/25-02-2024/13-05-2024/50/1`,
                method: "GET",
            })
        })
    })
});

export const { useGetOrdersQuery } = orderService;