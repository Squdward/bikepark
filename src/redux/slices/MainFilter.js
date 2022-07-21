import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	rentType: '',
	startDate: "",
	endDate: "",
	delivery: "",
	filter: {
		type: {
			Aluminum: false,
			Carbonfiber: false,
			MountainUrban: false,
			Urbaneconomy: false,
		},
		brand: '',
		frameSize: '',
	},
	
	ok: true,
	showResult: false,
	errorMessage: "",
	loading: false,
}

const MainFilter = createSlice({
	name: 'MainFilter',
	initialState,
	reducers: {
		serializeData: (state, action) => {
			const { name, value } = action.payload;

			state[name] = value;
		}, 
		setFilterType: (state, action) => {
			const { name, value } = action.payload;

			state.filter.type[name] = value;
		},
		setFilterOptions: (state, action) => {
			const {name, value} = action.payload;
			
			state.filter[name] = value
		},
		setShowResult: (state, action) => {
			state.showResult = action.payload
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		}
	}
})

export const { serializeData, setFilterType, setLoading, setShowResult, setFilterOptions } = MainFilter.actions;
export default MainFilter.reducer