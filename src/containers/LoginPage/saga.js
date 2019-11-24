import {put, takeEvery, delay} from 'redux-saga/effects'
import {userService} from "../../services/login.service";
import {LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS} from "./constants";
import {takeLatest} from "@redux-saga/core/effects";
import {loginFailureAction, loginSuccessAction} from "./actions";

const getCredential = state => state.credential;

export function* login(state) {
    const credential = getCredential(state);
    try {
        const user = yield userService.login(credential.username, credential.password);
        localStorage.setItem('user', JSON.stringify(user));
        yield put(loginSuccessAction(user));
    } catch (error) {
        yield put(loginFailureAction(error.message));
    }
}

export default function* loginPageSaga() {
    yield takeLatest(LOG_IN_REQUEST, login);
}