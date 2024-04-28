import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {QueryState} from "../models";

export const shopApi = createApi({
    reducerPath: 'shop',
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
                if (categoryId !== undefined) {
                    queryString  += `categoryId=${categoryId}&`;
                } else if (offset !== undefined) {
                    queryString  += `offset=${offset}&`;
                } else if (searchPattern !== undefined) {
                    queryString  += `q=${searchPattern}&`;
                }
                return queryString.slice(0, -1);
            }
        }),
        // getItemsFromCategory: builder.query({
        //     query: (categoryId) => `/items?categoryId=${categoryId}`
        // }),
        // getNextItems: builder.query({
        //     query: (offset) => `/items?offset=${offset}`
        // }),
        // getSearchItems: builder.query({
        //     query: (searchPattern) => `/items?q=${searchPattern}`
        // }),
        getSingleItem: builder.query({
            query: (id) => `/items/${id}`
        })
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

