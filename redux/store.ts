import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MainFilter from "./MainFilter/index.slice";
import Bike from "./Bike/index.slice";
 
const rootReducer = combineReducers({
	MainFilter,
	Bike,
	
});

const store =  configureStore({
	reducer: rootReducer
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;