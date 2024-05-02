import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {QueryState} from "../models";

export const shopApi = createApi({
    reducerPath: 'itemsReducer',
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),

    endpoints: (builder) => ({
        getTopSales: builder.query({
            query: () => `/top-sales`
        }),
        getCategories: builder.query({
            query: () => `/categories`
        }),
        getItems: builder.query({
            query: ({ categoryId, offset, searchPattern }: QueryState) => {
                let queryString = '/items?';
                queryString += !categoryId ? '' : `categoryId=${categoryId}&`;
                queryString += !offset ? '' : `offset=${offset}&`;
                queryString += !searchPattern ? '' : `q=${searchPattern}&`;
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
    useGetCategoriesQuery,
    useGetItemsQuery,
    useGetSingleItemQuery,
    usePlaceOrderMutation,
} = shopApi;

