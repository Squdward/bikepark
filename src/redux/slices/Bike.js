import { createSlice } from "@reduxjs/toolkit";
/*
	bike.checked = визуальный показатель в меню что велосипед выбран
	selectedBikes = выбранные велосипеды
*/

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
			const { price } = bike;

			bike.checked = true;
			state.selectedBikes.push(bike);
			state.price += Number.parseFloat(price)
			
		},
		removeBike: (state, action) => {
			const bike = state.bikes.find(item => item.id === action.payload);
			bike.checked = false;
			state.selectedBikes = state.selectedBikes.filter((item) => {
				
				if(item.id === action.payload) {
					state.price -= Number.parseFloat(item.price)
					item.checked = false
					return false
				}

				return true
			})
		},
		setBikes: (state, action) => {
			state.bikes = action.payload;
		},
		setOptionallyItem: (state, action) => {
			const {id, checked, name} = action.payload;
			const bike = state.selectedBikes.find(item => item.id === id);
			bike.optionally[name] = checked
		}
	}
})

export const { selectBike, removeBike, setBikes, setOptionallyItem } = Bikes.actions;
export default Bikes.reducer