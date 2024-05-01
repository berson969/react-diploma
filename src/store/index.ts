import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {shopApi} from "../api";
import RootReducer from "../slices";

export const store = configureStore({
    reducer: {
        cart: RootReducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);
