import { configureStore } from "@reduxjs/toolkit"

import createSagaMiddleware from "redux-saga"

import rootSaga from "./sagas/root"
import Bikes from "./slices/Bike"
import MainFilter from "./slices/MainFilter"
import Options from "./slices/Options"
import Order from "./slices/Order"
import Popup from "./slices/Popups"
import User from "./slices/User"

const SagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        Bikes,
        MainFilter,
        Options,
        Order,
        Popup,
        User,
    },
    middleware: (getDefaultMiddleWare) => {
        return getDefaultMiddleWare({ thunk: false }).prepend(SagaMiddleware)
    },
})

SagaMiddleware.run(rootSaga)
