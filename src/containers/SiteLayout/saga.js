import {put, takeEvery, delay} from 'redux-saga/effects'
import {takeLatest} from "@redux-saga/core/effects";
import {ADD_TO_CART, SEARCH, GO_TO_PAGE} from './constants';
import {bikeService} from "../../services/bikes.service";
import {displayAction} from "./actions";

export function* addToCart(state) {
}

export function* search(state) {
    const keyword = state.query.keyword;
    const {page, size} = state.pageQuery;
    const {bikes, totalRecords} = yield bikeService.getAll(page, size, keyword);
    bikes.map(bike => bike.addedToCart = false);
    yield put(displayAction(bikes, page, size, totalRecords));
}

export function* goToPage(state) {
    const keyword = state.query ? state.query.keyword : '';
    const {page, size} = state.pageQuery;
    const {bikes, totalRecords} = yield bikeService.getAll(page, size, keyword);
    bikes.map(bike => bike.addedToCart = false);
    yield put(displayAction(bikes, page, size, totalRecords));
}

export default function* siteLayoutSaga() {
    yield takeLatest(ADD_TO_CART, addToCart);
    yield takeLatest(SEARCH, search);
    yield takeLatest(GO_TO_PAGE, goToPage);
}