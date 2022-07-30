import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	login: false,
}

const Popup = createSlice({
	name: "Popup",
	initialState,
	reducers: {
		openModal: (state, action) => {
			const name = action.payload;

			state[name] = true;
		},
		closeModal: (state, action) => {
			const name = action.payload;

			state[name] = false;
		},
	}
})


export const { openModal, closeModal } = Popup.actions;
export default Popup.reducer