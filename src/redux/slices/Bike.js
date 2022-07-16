import { createSlice } from "@reduxjs/toolkit";

const Bikes = createSlice({
	name: 'Bikes',
	initialState: {
		bikes: [],
		selectedBikes: [],
		price: 0,
	},
	reducers: {
		selectBike: (state, action) => {
			const bike = state.bikes.find(item => item.id === action.payload);

			state.selectedBikes.push(bike);
		},
		removeBike: (state, action) => {
			const index = state.selectedBikes.indexOf(action.payload);
			state.selectedBikes.splice(index, 1);
		},
		setBikes: (state, action) => {
			state.bikes = action.payload;
		}
	}
})

export const { selectBike, removeBike, setBikes } = Bikes.actions;
export default Bikes.reducer