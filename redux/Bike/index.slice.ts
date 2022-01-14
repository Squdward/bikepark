import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBikes = createAsyncThunk(
	'getBikes',
	async (_, {getState, rejectWithValue}) => {
		try {
			let query = "http://localhost:3001/bicycles?";
			let filter = getState().MainFilter.filter;

			for(let item in filter) {
				if(typeof(filter[item]) === 'object') {
					for(let i in filter[item]) {
						// filter[item][i] = filter.type.Aluminum|Carbonfiber and etc
						filter[item][i] 
							? query += `type=${i}&`
							: ""; 
					}					
				}

				else {
					// not empty && not === 'All'
					filter[item] && filter[item] !== 'All'
						? query += `${item}=${filter[item]}&`
						: ''
				}
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

export const calcBikePrice = createAsyncThunk(
	'calcBikePrice',
	(_, {getState, dispatch}) => {
		let {startDate, endDate} = getState().MainFilter
		
		const timeDiff  = (new Date(endDate)) - (new Date(startDate));
		const days      = timeDiff / (1000 * 60 * 60 * 24)

		dispatch(calcFullPrice(Math.ceil(days)))
	}
)

const Bike = createSlice({
    name: "Bike",
    initialState: {
        bikes: [],
		selectedBikes: [],
		price: 0,
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
		calcFullPrice: (state, action) => {
			let oneDayPrice = state.selectedBikes.reduce((acc, curvalue) => {
				return acc += Number.parseInt(curvalue.price)
			}, 0);

			state.price = oneDayPrice*action.payload + "AED"
		}
    },
    extraReducers: {
		[getBikes.fulfilled]: (state, action) => {
			state.bikes = action.payload;
		},
    }
})

export const {selectBikes, removeBikes, calcFullPrice} = Bike.actions
export default Bike.reducer