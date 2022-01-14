import { createSlice } from "@reduxjs/toolkit";
import { getBikes } from "redux/Bike/index.slice";

const mainFilter = createSlice({
    name: 'MainFilter',
    initialState: {
        rentType: "По дням",
		startDate: "2022-01-14 00:00",
		endDate: "2022-01-15 00:00",
		delivery: "По адресу",
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
    },
    reducers: {
        serializeForm: (state, action) => {
			const name = action.payload.name;
			const type = action.payload.type;

			if (type === 'checkbox') {
				state.filter.type[name] = action.payload.checked;
			} 
			else {
				state[name] = action.payload.value;
			}
		},
		serializeSelect: (state, action) => {
			state.delivery = action.payload;
		},
		serializeData: (state, action) => {
			state[action.payload.name] = action.payload.value;
		},
        filterSelect: (state, action) => {
			state.filter[action.payload.name] = action.payload.value
		}
    },
	extraReducers: {
		[getBikes.pending]: (state) => {
			state.loading = true;
			state.showResult = true;
		},
		[getBikes.fulfilled]: (state) => {
			state.ok = true;
			state.loading = false;
			state.errorMessage = '';
		},
	}
})

export const {serializeForm, serializeSelect, serializeData, filterSelect} = mainFilter.actions
export default mainFilter.reducer