import {createSlice} from "@reduxjs/toolkit";
import {shopApi} from "../api";
import {CartCartState, ItemInCartState} from "../models";

const initialState: CartCartState = {
        // items : {},
        cart: [],
        totalPrice: 0,
        totalQuantity: 0
}

const getCartFromLocalStorage = () => {
    const cartFromLocalStorage: string | null = localStorage.getItem('cart');
    return cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [];
}

const shopSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
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
        removeFromCartReducer: (state: CartCartState, action) => {
            const cartFromLocalStorage: ItemInCartState[] = getCartFromLocalStorage();
            state.cart = cartFromLocalStorage.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        setCartTotals: (state, action) => {
            state.totalPrice = action.payload.totalPrice;
            state.totalQuantity = action.payload.totalQuantity;
        },
    },
    extraReducers: (builder) => {
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
    getCart,
    addToCartReducer,
    removeFromCartReducer,
    setCartTotals,
} = shopSlice.actions;

export default shopSlice.reducer;

export const selectCart = (state: ShopState) => state.cart;

export const selectItems = (state: ShopState) => state.items;