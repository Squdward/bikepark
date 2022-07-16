import { takeEvery, put, call } from "redux-saga/effects"
import { setBikes } from "../slices/Bike";
import { setOptions } from "../slices/MainFilter";

const getRequest = async (api) => {
	const request = await fetch(`https://62d1d524d4eb6c69e7e42a57.mockapi.io/${api}`);
	const data = await request.json();
	return data
}

export function* workerSaga() {
	const data = yield call(getRequest, '/Bikes');
	const options = yield call(getRequest, '/Options')

	yield put(setBikes(data))
	yield put(setOptions(options[0]))

}

export function* watcherSaga() {
	yield takeEvery('GET_BIKES', workerSaga)

}

export default function* rootSaga() {
	yield watcherSaga()
}