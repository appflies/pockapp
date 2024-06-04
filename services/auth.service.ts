import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserType } from "@/types/user";

export const authService = createApi({
    reducerPath: "authService",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://nicoservices.clobitech.com/usuarios",
        prepareHeaders(headers, { getState }) {
            headers.set("Content-Type", "application/json; charset=UTF-8");
        },
    }),
    endpoints: (builder) => ({
        signin: builder.mutation<UserType, {
            usuario: string,
            password: string
        }>({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials
            })
        })
    })
})

export const { useSigninMutation } = authService;
