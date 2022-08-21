import { createSlice } from "@reduxjs/toolkit"
import {User} from "./User";

const initialState = {
	name: "",
	phoneNumber: "",
	adress: "",
	typePay: "Онлайн",
	returnAdress: "",
	returnDate: "",
}

const Order = createSlice({
	name: "Order",
	initialState,
	reducers: {
		setValue: (state, action) => {
			const {name, value} = action.payload;
			state[name] = value;
		}
	}, 
	extraReducers: {
		[User.actions.setPersonal]: (state, action) => {
			const { adress, name, phone } = action.payload
			state.adress = adress
			state.name = name
			state.phoneNumber = phone
		}
	}
})


export const {setValue} = Order.actions;
export default Order.reducer