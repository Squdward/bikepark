import { configureStore } from '@reduxjs/toolkit'
import Bikes from "./slices/Bike";
import MainFilter from "./slices/MainFilter";

export const store = configureStore({
	reducer: {
		Bikes,
		MainFilter,
	},
})