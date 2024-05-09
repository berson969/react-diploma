import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {shopApi} from "../api";
import {CartCartState, CartState} from "../models";

const initialState: CartState = {
        items : {
            data: [],
        },
        cart: [],
        options: {
            offset: undefined,
            categoryId: undefined,
            searchPattern: undefined,
        }
}

export const fetchCart = createAsyncThunk(
	'carts/fetchCart',
	async () => {
		try {
			const cartFromLocalStorage: string | null = localStorage.getItem('cart');
			return cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [];
		} catch (error) {
			console.error('Failed to fetch cart:', error);
			throw error;
		}
	}
);

const shopSlice = createSlice({
    name: 'carts',
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
        addToCart: (state,action) => {
            const existingItemIndex = state.cart
                .findIndex(item =>
                    item.id === action.payload.id && item.size === action.payload.size
                );

            if (existingItemIndex !==  -1) {
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex].count += action.payload.count;
                state.cart = updatedCart;
            } else {
                state.cart = [...state.cart, action.payload];
            }
        },
		updateToCart: (state, action) => {
			const existingItemIndex = state.cart
				.findIndex(item =>
					item.id === action.payload.id && item.size === action.payload.size
				);
			if (existingItemIndex !==  -1) {
				const updatedCart = [...state.cart];
				updatedCart[existingItemIndex].count = action.payload.count;
				state.cart = updatedCart;
			}
		},
        removeFromCart: (state: CartState, action) => {
            state.cart = state.cart.filter(item =>
                item.id !== action.payload.id &&
                item.size !== action.payload.size
            );
        },
    },
    extraReducers: (builder) => {
		builder.addCase(fetchCart.fulfilled, (state, action) => {
			console.log("Fetch cart", state.cart, action.payload )
			state.cart = action.payload ? action.payload : [];
		});

        builder.addMatcher(shopApi.endpoints.getCategories.matchPending, (state, action) => {
            console.log("getCategoriesPending", state,  action.payload);
			// state.items = action.payload ? action.payload : [];
        });

        builder.addMatcher(shopApi.endpoints.getCategories.matchFulfilled, (state, action) => {
            console.log("getCategoriesSuccess", state, action.payload)
            // state.categories = action.payload.data
        });

        builder.addMatcher(shopApi.endpoints.getItems.matchFulfilled, (state, action) => {
            console.log("getItemsSuccess", state.items, action.payload)
            state.items = action.payload
        });

        builder.addMatcher(shopApi.endpoints.placeOrder.matchFulfilled, (state) => {
            console.log("Order body", state.cart )
            state.cart = [];
            localStorage.removeItem('cart');
        });
    }
});
export const {
    setQueryOptions,
    addToCart,
	updateToCart,
    removeFromCart,
} = shopSlice.actions;
export default shopSlice.reducer;
export const selectCart = (state: CartCartState) => state.carts.cart;
export const selectOptions = (state: CartCartState) => state.carts.options;
