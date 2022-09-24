import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: null,
    auth: false,
    orders: [],
    personal: {
        name: "",
        email: "",
        password: "",
        phone: "",
        adress: "",
    },
}

export const User = createSlice({
    name: "User",
    initialState,
    reducers: {
        authUser: (state, action) => {
            state.auth = true
        },
        deAuthUser: (state, action) => {
            state.auth = false
        },
        registerUser: (state, action) => {
            state.auth = true
            state.id = action.payload
        },
        setOrders: (state, action) => {
            state.orders = action.payload
        },
        setPersonal: (state, action) => {
            state.personal = action.payload
        },
        changePersonal: (state, action) => {
            state.personal[action.payload.name] = action.payload.value
        },
    },
})

export const {
    authUser,
    deAuthUser,
    registerUser,
    setOrders,
    setPersonal,
    changePersonal,
} = User.actions
export default User.reducer
