import { takeEvery, put, call } from "redux-saga/effects"
import Api from "../../utils/api";
import { setBikes } from "../slices/Bike";
import { setShowResult } from "../slices/MainFilter";
import { setOptions } from "../slices/Options";
import { authUser, registerUser } from "../slices/User";

function* getBikes(val) {
	const options = val.payload;
	const params = new URLSearchParams();

	for (let key in options) {
		const value = options[key]; 

		if (typeof(value) === 'object') {

			for(let keyIn in options[key]) {
				const valueIn = options[key][keyIn]

				if (valueIn) {
					
					params.append('type', keyIn)
				}
			}
		} else {
			if(value && value !== 'All') {
				params.append(key, options[key])
			}
		}
	}

	try {
		const bikes = yield call([Api, Api.get], `bicycles?${params.toString()}`)

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

function* loginMe ({payload}) {
	const response = yield fetch('https://reqres.in/api/login', {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json'
		}
	})

	const {token} = yield response.json();

	window.localStorage.setItem('token', token)

	yield put(authUser())
}

function* registerMe({payload}) {
	const response = yield fetch('https://reqres.in/api/register', {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json'
		}
	})

	const { id, token } = yield response.json()

	window.localStorage.setItem('token', token)

	yield put(registerUser(id))
}



export function* watcherSaga() {
	yield takeEvery(GET_BIKES, getBikes)
	yield takeEvery(GET_OPTIONS, getOptions)
	yield takeEvery(LOGIN, loginMe)
	yield takeEvery(REGISTER, registerMe)
}

export default function* rootSaga() {
	yield watcherSaga()
}

export const GET_BIKES = 'GET_BIKES'
export const GET_OPTIONS = 'GET_OPTIONS'
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
