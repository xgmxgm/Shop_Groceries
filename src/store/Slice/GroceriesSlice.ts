import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Groceries } from "@/Data/Groceries"

const initialState = Groceries;

const GrocerieSlice = createSlice({
	name: "Groceries",
	initialState,
	reducers: {
		setGroceries(state) {
			state = Groceries;
			return state;
		},

		filterGroceries(state, action: PayloadAction<"vegetables" | "fruit" | "spices">) {
			state = Groceries.filter((Groceri) => Groceri.type == action.payload);
			return state;
		},

		searchGroceri(state, action: PayloadAction<string>) {
			state = Groceries.filter((Groceri) => Groceri.title == action.payload);
			return state;
		}
	}
});

export const { filterGroceries, setGroceries, searchGroceri } = GrocerieSlice.actions;
export default GrocerieSlice.reducer;