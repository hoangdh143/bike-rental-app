import { produce } from 'immer';
import {ADD_TO_CART, SEARCH, GO_TO_PAGE, DISPLAY} from './constants';
import {DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE} from "./index";

const initialState = {
    cart: [],
    query: {
        keyword: '',
    },
    pageQuery: {
        page: 0,
        size: 0
    },
    display: {
        bikes: [],
        page: 0,
        size: DEFAULT_PAGE_SIZE,
        totalRecords: 0,
    }
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
                draft.query = action.query;
                draft.pageQuery = action.pageQuery;
                break;
            case DISPLAY:
                draft.display = action.display;
                break;
            default:
                return state;
        }
    });
}