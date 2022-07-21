import { takeEvery, put, call } from "redux-saga/effects"
import Api from "../../utils/api";
import { setBikes } from "../slices/Bike";
import { setShowResult } from "../slices/MainFilter";
import { setOptions } from "../slices/Options";

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
		const bikes = yield call([Api, Api.get], `/bicycles?${params.toString()}`)

		yield put(setBikes(bikes))
		yield put(setShowResult(true))
	} catch (error) {
		console.error(error)
	}
}

function* getOptions() {
	try {
		const data = yield call([Api, Api.get], `/options`)
	
		yield put(setOptions(data))
	} catch (error) {
		console.error(error)		
	}
}	



export function* watcherSaga() {
	yield takeEvery(GET_BIKES, getBikes)
	yield takeEvery(GET_OPTIONS, getOptions)

}

export default function* rootSaga() {
	yield watcherSaga()
}

export const GET_BIKES = 'GET_BIKES'
export const GET_OPTIONS = 'GET_OPTIONS'
