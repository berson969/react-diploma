import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {QueryState} from "../models";

export const shopApi = createApi({
    reducerPath: 'shop',
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),

    endpoints: (builder) => ({
        getTopSales: builder.query({
            query: () => `/top-sales`
        }),
        getItems: builder.query({
            query: ({ categoryId, offset, searchPattern }: QueryState) => {
                let queryString = '/items?';
                if (categoryId !== undefined) {
                    queryString  += `categoryId=${categoryId}&`;
                } else if (offset !== undefined) {
                    queryString  += `offset=${offset}&`;
                } else if (searchPattern !== undefined) {
                    queryString  += `q=${searchPattern}&`;
                }
                return queryString.slice(0, -1);
            },
        }),
        getSingleItem: builder.query({
            query: (id) => `/items/${id}`
        }),
        placeOrder: builder.mutation({
            query: (orderData) => ({
                url: '/order',
                method: 'POST',
                body: orderData,
            }),
        }),
    }),
})

export const {
    useGetTopSalesQuery,
    useGetItemsQuery,
    useGetSingleItemQuery,
    usePlaceOrderMutation,
} = shopApi;

