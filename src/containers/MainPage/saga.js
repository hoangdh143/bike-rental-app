import { put, takeEvery, delay } from 'redux-saga/effects'
import {takeLatest} from "@redux-saga/core/effects";
import {ADD_TO_CART, SEARCH, GO_TO_PAGE}  from './constants';

export function* addToCart(state) {
    // const cart = getCredential(state);
    // try  {
    //     const user = yield userService.login(credential.username, credential.password);
    //     localStorage.setItem('user', JSON.stringify(user));
    //     yield put(loginSuccessAction(user));
    // } catch (error) {
    //     yield put(loginFailureAction(error.message));
    // }
}

export function* search(state) {

}

export function* goToPage(state) {

}

export default function* mainPageSaga() {
    yield takeLatest(ADD_TO_CART, addToCart);
    yield takeLatest(SEARCH, search);
    yield takeLatest(GO_TO_PAGE, goToPage);
}