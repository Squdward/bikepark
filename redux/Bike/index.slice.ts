import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBikes = createAsyncThunk(
	'getBikes',
	async (_, {getState, rejectWithValue}) => {
		try {
			let query = "http://localhost:3001/bicycles?";
			let filter = getState().MainFilter.filter;


			for(let item in filter) {
				
				// not empty && not === 'All'
				filter[item] && filter[item] !== 'All'
					? query += `${item}=${filter[item]}&`
					: ''
			}

			const getData = await fetch(query);

			if(!getData.ok) throw new Error('Server error')

			const data = await getData.json(); 

			if(!data.length) throw new Error('EMPTY_REQUEST')

			return data
		} catch (error) {
			return rejectWithValue(error.message);
		}
});

const Bike = createSlice({
    name: "Bike",
    initialState: {
        bikes: [],
		selectedBikes: [],
    },
    reducers: {
        selectBikes: (state, action) => {
			let bike = state.bikes.find( item => {
				return item.id === action.payload 
			})
			state.selectedBikes.push(bike)
		},
		removeBikes: (state, action) => {
			const index = state.selectedBikes.indexOf(action.payload);
			state.selectedBikes.splice(index, 1);
		},
    },
    extraReducers: {
		[getBikes.fulfilled]: (state, action) => {
			state.bikes = action.payload;
		},
    }
})

export const {selectBikes, removeBikes} = Bike.actions
export default Bike.reducer