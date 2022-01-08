import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBikes = createAsyncThunk('getBikes', async (_, {getState, rejectWithValue}) => {
	try {
		let query = "http://localhost:3001/bicycles?";
		let filter = getState();

		for(let item in filter) {
			// not empty && not === 'All'

			filter[item] && filter[item] !== 'All'
				? query += `${item}=${filter[item]}&`
				: ''
		}

		const getData = await fetch(query);

		if(!getData.ok) throw new Error('Server error')

		const data = await getData.json(); 

		if(!data.length) throw new Error(EMPTY_REQUEST)

		return data
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

/* 
 Разбить на сущности или Привести к нормальному виду стейт
 Настроить вывод ошибок 
 Получать данные для селектов и опции при загрузке через getStaticProps
*/

const Main = createSlice({
	name: "Main",
	initialState: {
		rentType: "По дням",
		startDate: "14-01-22",
		endDate: "15-01-22",
		delivery: "По адресу",
		filter: {
			Aluminum: false,
			Carbonfiber: false,
			MountainUrban: false,
			Urbaneconomy: false,
			brand: '',
			frameSize: '',
		},
		bikes: [],
		selectedBikes: [],
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
				state.filter[name] = action.payload.checked;
			} 
			else {
				state[name] = action.payload.value;
			}
		},
		serializeSelect: (state, action) => {
			state.delivery = action.payload.value;
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
		},
		filterSelect: (state, action) => {
			state.filter[action.payload.name] = action.payload.value
		}
	},
	extraReducers: {
		[getBikes.pending]: (state, action) => {
			state.loading = true;
			state.showResult = true;
		},
		[getBikes.fulfilled]: (state, action) => {
			state.ok = true;
			state.loading = false;
			state.errorMessage = '';
			state.bikes = action.payload;
		},
		[getBikes.rejected]: (state, action) => {
			state.ok = false
			state.loading = false;
			let erromessage = {
				EMPTY_REQUEST: "По вашему запросе ничего не найдено",
				server: "лабуда"
			}

			if(action.payload === EMPTY_REQUEST) {
				state.errorMessage = 'По вашему запросе ничего не найдено'
			}
		}
	}
});


export const { serializeSelect, serializeData, serializeForm, selectBikes, removeBikes, filterSelect } = Main.actions;
export default Main.reducer;