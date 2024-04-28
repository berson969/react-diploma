import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {QueryState} from "../models";

export const shopApi = createApi({
    reducerPath: 'shop',
    tagTypes: ['Items'],
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
            providesTags: ['Items'],
            invalidatesTags: [{
                type: 'Items'
            }]
        }),
        getSingleItem: builder.query({
            query: (id) => `/items/${id}`
        })
        // getCategories: builder.query({
        //     query: () => `/categories`
        // }),
        // getItemsFromCategory: builder.query({
        //     query: (categoryId) => `/items?categoryId=${categoryId}`
        // }),
        // getNextItems: builder.query({
        //     query: (offset) => `/items?offset=${offset}`
        // }),
        // getSearchItems: builder.query({
        //     query: (searchPattern) => `/items?q=${searchPattern}`
        // }),

    }),
})

export default shopApi;

export const {
    useGetTopSalesQuery,
    // useGetCategoriesQuery,
    useGetItemsQuery,
    // useGetItemsFromCategoryQuery,
    // useGetNextItemsQuery,
    // useGetSearchItemsQuery,
    useGetSingleItemQuery
} = shopApi;

