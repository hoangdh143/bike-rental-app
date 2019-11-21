import { produce } from 'immer';
import {ADD_TO_CART, SEARCH, GO_TO_PAGE}  from './constants';

const initialState = {
    cart: [],
    query: {},
    page: {},
    size: {},
};

export default function mainPageReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case ADD_TO_CART:
                console.log("Added to cart");
                draft.cart = [...draft.cart, action.bike];
                break;
            case SEARCH:
                console.log("Query input");
                draft.query = action.query;
                break;
            case GO_TO_PAGE:
                console.log("Go to page");
                draft.page = action.page;
                draft.size = action.size;
                break;
            default:
                return state;
        }
    });
}