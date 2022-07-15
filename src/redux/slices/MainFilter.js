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
	
	switchOption: [
		{
			value: "По дням",
			placeholder: "По дням",
		},
		{
			value: "2 часа",
			placeholder: "2 часа",
		},
	],
	selectOption: [
		{
			id: 1,
			value: "По Адресу",
			label: "По Адресу",
		},
		{
			id: 2,
			value: "Самовывоз",
			label: "Самовывоз",
		},
	],

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
		}
	}
})

export const { serializeData } = MainFilter.actions;
export default MainFilter.reducer
