import { configureStore } from "@reduxjs/toolkit";
import Main from "./Main/index.slice";

export default configureStore({
	reducer: Main
});