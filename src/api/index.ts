import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react';
import {OptionsState} from "../models";

const baseQuery = retry(fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}), {
	maxRetries: 5,
});

export const shopApi = createApi({
    reducerPath: 'itemsQuery',
    baseQuery,

    endpoints: (builder) => ({
        getTopSales: builder.query({
            query: () => `/top-sales`,
        }),
        getCategories: builder.query({
            query: () => `/categories`
        }),
        getItems: builder.query({
            query: ({ categoryId, offset, searchPattern }: OptionsState) => {
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
            query: (orderData) => {
				console.log('orderData', orderData)
				return {
                url: '/order',
                method: 'POST',
                body: orderData,
            }},
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

