import { takeEvery, put, call } from "redux-saga/effects"

import Api from "../../utils/api"
import { bicycleType } from "../../utils/constant"
import { setBikes } from "../slices/Bike"
import { setShowResult } from "../slices/MainFilter"
import { setOptions } from "../slices/Options"
import { closeModal } from "../slices/Popups"
import { authUser, registerUser, setOrders, setPersonal } from "../slices/User"

function* getBikes(val) {
    const options = val.payload
    const params = new URLSearchParams()

    for (let key in options) {
        const value = options[key]

        if (typeof value === "object") {
            for (let keyIn in options[key]) {
                const valueIn = options[key][keyIn]

                const urlParam = Object.keys(bicycleType).find(
                    (key) => bicycleType[key] === keyIn
                )

                if (valueIn) {
                    params.append("type", urlParam)
                }
            }
        } else {
            if (value && value !== "All") {
                params.append(key, options[key])
            }
        }
    }

    try {
        const bikes = yield call([Api, Api.get], `bike?${params.toString()}`)

        bikes.forEach((bike) => {
            bike.optionally = {
                helmet: false,
                flashlight: false,
                lock: false,
            }
        })
        yield put(setBikes(bikes))
        yield put(setShowResult(true))
    } catch (error) {
        console.error(error)
    }
}

function* getOptions() {
    try {
        const data = yield call([Api, Api.get], `options`)

        yield put(setOptions(data))
    } catch (error) {
        console.error(error)
    }
}

function* loginMe({ payload }) {
    const response = yield fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
    })

    const { token } = yield response.json()

    window.localStorage.setItem("token", token)

    yield put(authUser())
    yield put(closeModal("login"))
}

function* registerMe({ payload }) {
    const { token } = yield call(
        [Api, Api.post],
        `auth/register`,
        JSON.stringify(payload)
    )

    window.localStorage.setItem("token", token)

    yield put(closeModal("login"))
}

function* getOrders() {
    try {
        const response = yield call([Api, Api.get], `orders/`)

        yield put(setOrders(response))
    } catch (error) {
        console.log(error)
    }
}

function* removeOrder({ payload }) {
    try {
        yield call([Api, Api.delete], `orders.?id=${payload}`)
    } catch (error) {
        console.log(error)
    }
}

function* getPersonal({ payload }) {
    try {
        const response = yield call([Api, Api.get], `auth/me`)

        yield put(setPersonal(response))
    } catch (error) {
        console.log(error)
    }
}

function* updatePersonal({ payload }) {
    try {
        // В идеале здесь нужен именно put запроса, но мне лень сравнивать два объекта
        yield call([Api, Api.update], `user/1`, payload)
    } catch (error) {
        console.log(error)
    }
}

export function* watcherSaga() {
    yield takeEvery(GET_BIKES, getBikes)
    yield takeEvery(GET_OPTIONS, getOptions)
    yield takeEvery(LOGIN, loginMe)
    yield takeEvery(REGISTER, registerMe)
    yield takeEvery(GET_ORDERS, getOrders)
    yield takeEvery(DELETE_ORDER, removeOrder)
    yield takeEvery(GET_PERSONAL, getPersonal)
    yield takeEvery(UPDATE_PERSONAL, updatePersonal)
}

export default function* rootSaga() {
    yield watcherSaga()
}

export const GET_BIKES = "GET_BIKES"
export const GET_OPTIONS = "GET_OPTIONS"
export const LOGIN = "LOGIN"
export const REGISTER = "REGISTER"
export const GET_ORDERS = "GET_ORDERS"
export const DELETE_ORDER = "DELETE_ORDER"
export const GET_PERSONAL = "GET_PERSONAL"
export const UPDATE_PERSONAL = "UPDATE_PERSONAL"
