import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {shopApi} from "../api";
import RootReducer from "../slices";
import {Middleware} from "redux";
import {ActionState} from "../models";

const TYPES = ['carts/addToCart', 'carts/removeFromCart', 'carts/updateToCart']

const localStorageMiddleware: Middleware = () => next => (action: unknown) => {
	const result = next(action);
	if (typeof action === 'object' && action && 'type' in action) {
		const typedAction = action as ActionState;
		if (TYPES.includes(typedAction.type)) {
			const cart = store.getState().carts.cart;
			localStorage.setItem('cart', JSON.stringify(cart));
		}
		return result;
	}
};

export const store = configureStore({
    reducer: {
        carts: RootReducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware, localStorageMiddleware),
});



setupListeners(store.dispatch);
