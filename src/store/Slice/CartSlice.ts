import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { IGroceries } from "@/Data/Groceries"

const initialState = [] as IGroceries[]

const CartSlice = createSlice({
	name: "Cart",
	initialState,
	reducers: {
		setCart(state, action: PayloadAction<IGroceries>) {
			state.push(action.payload)
		},
		deleteInCart(state, action: PayloadAction<number>) {
			const indexToRemove = state.findIndex(Groceri => Groceri.id === action.payload);
			state.splice(indexToRemove, 1)
			return state;
		}
	}
})

export const { setCart, deleteInCart } = CartSlice.actions;
export default CartSlice.reducer;