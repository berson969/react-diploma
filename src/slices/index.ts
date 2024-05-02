import {createSlice} from "@reduxjs/toolkit";
import {shopApi} from "../api";
import {CartCartState, CartState, ItemInCartState} from "../models";

const initialState: CartState = {
        items : {
            data: [],
        },
        cart: [],
        categories: [],
        totalPrice: 0,
        totalQuantity: 0,
        options: {
            offset: undefined,
            categoryId: undefined,
            searchPattern: undefined,
        }
}

const getCartFromLocalStorage = () => {
    const cartFromLocalStorage: string | null = localStorage.getItem('cart');
    return cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [];
}

const shopSlice = createSlice({
    name: 'CartData',
    initialState,
    reducers: {
        setQueryOptions: (state, action) => {
            return {
                ...state,
                options: {
                    ...state.options,
                    ...action.payload
                }
            }
        },
        getCart: (state) => {
            return {
                ...state,
                cart: getCartFromLocalStorage()
            }
        },
        addToCartReducer: (state,action) => {
            const cartFromLocalStorage: ItemInCartState[] = getCartFromLocalStorage();
            const existingItemIndex = cartFromLocalStorage
                .findIndex(item =>
                    item.id === action.payload.id && item.size === action.payload.size
                );

            if (existingItemIndex !==  -1) {
                const updatedCart = [...cartFromLocalStorage];
                updatedCart[existingItemIndex].count += action.payload.count;
                state.cart = updatedCart;
            } else {
                state.cart = [...cartFromLocalStorage, action.payload];
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCartReducer: (state: CartState, action) => {
            const cartFromLocalStorage: ItemInCartState[] = getCartFromLocalStorage();
            state.cart = cartFromLocalStorage.filter(item =>
                item.id !== action.payload.id &&
                item.size !== action.payload.size
            );
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        setCartTotals: (state, action) => {
            state.totalPrice = action.payload.totalPrice;
            state.totalQuantity = action.payload.totalQuantity;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(shopApi.endpoints.getCategories.matchPending, (state, action) => {
            console.log("getCategoriesPending", state.categories, action.payload)
        });
        builder.addMatcher(shopApi.endpoints.getCategories.matchFulfilled, (state, action) => {
            console.log("getCategoriesSuccess", state.categories, action.payload)
            state.categories = action.payload.data
        });

        builder.addMatcher(shopApi.endpoints.getItems.matchFulfilled, (state, action) => {
            console.log("getItemsSuccess", state.items, action.payload)
            state.items = action.payload
        });

        builder.addMatcher(shopApi.endpoints.placeOrder.matchFulfilled, (state) => {
            console.log("Order body", state.cart )
            state.cart = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
            localStorage.removeItem('cart');
        });
    }
});

export const {
    setQueryOptions,
    getCart,
    addToCartReducer,
    removeFromCartReducer,
    setCartTotals,
} = shopSlice.actions;

export default shopSlice.reducer;

export const selectCart = (state: CartCartState) => state.carts.cart;

export const selectItems = (state: CartCartState) => state.carts.items;
export const selectOptions = (state: CartCartState) => state.carts.options;