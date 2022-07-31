import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	id: null,
	auth: false,
}

const User = createSlice({
	name: "User",
	initialState,
	reducers: {
		authUser: (state, action) => {
			// state.id = payload.id
			state.auth = true
		},
		deAuthUser: (state, action) => {
			state.auth = true
			// state.id = null
		},
		registerUser: (state, action) => {
			state.auth = true;
			state.id = action.payload;
		}
	}
})

export const { authUser, deAuthUser, registerUser } = User.actions
export default User.reducer