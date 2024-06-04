import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/states/store";
import { OrderType, PaginatedOrdersResponse } from "@/types/order";

export const orderService = createApi({
    reducerPath: "orderService",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://nicoservices.clobitech.com/pago",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            headers.set("Content-Type", "application/json; charset=UTF-8");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getOrders: builder.query<PaginatedOrdersResponse, { desde: string, hasta: string, per_page: number, page: number }>({
            query: ({ desde, hasta, per_page, page }) => ({
                url: `/buscar/${desde}/${hasta}/${per_page}/${page}`,
                method: "GET",
            })
        })
    })
});

export const { useGetOrdersQuery } = orderService;