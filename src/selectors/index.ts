import { createSelector } from '@reduxjs/toolkit';
import {selectCart} from "../slices";

export const selectTotalPrice = createSelector(
	selectCart,
	cart => cart.reduce((acc, item) => acc + (item.price * item.count), 0)
);

export const selectTotalQuantity = createSelector(
	selectCart,
	cart => cart.reduce((acc, item) => acc + item.count, 0)
);
