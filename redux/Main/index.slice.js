import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBikes = createAsyncThunk('getBikes', async () => {
	let query = "http://localhost:3001/bicycles?";

	const getData = await fetch(query);

	return await getData.json();
});

const Main = createSlice({
	name: "Main",
	initialState: {
		rentType: "По дням",
		startDate: new Date(),
		endDate: new Date(),
		delivery: "По адресу",
		type: {
			Aluminum: false,
			Carbonfiber: false,
			MountainUrban: false,
			Urbaneconomy: false,
		},
		bikes: [],
		selectedBikes: [],
	},
	reducers: {
		serializeForm: (state, action) => {
			const name = action.payload.name;
			const type = action.payload.type;

			if (type === 'checkbox') {
				state.type[name] = action.payload.checked;
			} else {
				state[name] = action.payload.value;
			}
		},
		serializeSelect: (state, action) => {
			state.delivery = action.payload;
		},
		serializeData: (state, action) => {
			state[action.payload.name] = action.payload.value;
		},
		selectBikes: (state, action) => {
			state.selectedBikes.push(action.payload);
		},
		removeBikes: (state, action) => {
			const index = state.selectedBikes.indexOf(action.payload);
			state.selectedBikes.splice(index, 1);
		}
	},
	extraReducers: {
		[getBikes.fulfilled]: (state, action) => {
			state.bikes = action.payload;
		}
	}
});


export const { serializeSelect, serializeData, serializeForm, selectBikes, removeBikes } = Main.actions;
export default Main.reducer;