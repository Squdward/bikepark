import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MainFilter from "./MainFilter/index.slice";
import Bike from "./Bike/index.slice";
 
const rootReducer = combineReducers({
	MainFilter,
	Bike,
	
})
export default configureStore({
	reducer: rootReducer
});