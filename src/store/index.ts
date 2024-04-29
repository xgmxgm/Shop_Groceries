import { configureStore } from '@reduxjs/toolkit'

import CartReducer from "./Slice/CartSlice"
import GroceriesReducer from "./Slice/GroceriesSlice"

export const store = configureStore({
	reducer: {
		Groceries: GroceriesReducer,
		Cart: CartReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;