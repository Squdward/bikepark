import { createSlice } from "@reduxjs/toolkit"

const initialState = {
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
    brandsOptions: [],
    frameSizeOptions: [],
}

const Options = createSlice({
    name: "Options",
    initialState,
    reducers: {
        setOptions: (state, action) => {
            Object.assign(state, action.payload)
        },
    },
})
export const { setOptions } = Options.actions
export default Options.reducer
