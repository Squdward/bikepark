import { createSlice } from "@reduxjs/toolkit"

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
	}
})


export const {setValue} = Order.actions;
export default Order.reducer