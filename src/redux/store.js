import { configureStore } from '@reduxjs/toolkit'
import Bikes from "./slices/Bike";
import MainFilter from "./slices/MainFilter";
import createSagaMiddleware from "redux-saga"
import rootSaga from './sagas/root';

const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		Bikes,
		MainFilter,
	},
	middleware: (getDefaultMiddleWare) => {
		return getDefaultMiddleWare({thunk: false}).prepend(SagaMiddleware)
	}
})

SagaMiddleware.run(rootSaga)