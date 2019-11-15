import { put, takeEvery, delay } from 'redux-saga/effects'

export function* login() {
    yield delay(1000)
    yield put({ type: LOG_IN_SUCCESS, userInfo: {} })
}

export default function* loginPageSaga() {
    yield takeEvery('LOG_IN', login)
}