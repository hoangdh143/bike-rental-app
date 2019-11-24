import {produce} from 'immer';
import {ADD_TO_CART, SEARCH, GO_TO_PAGE, DISPLAY, UPDATE_PAGE_FROM_CART, REMOVE_FROM_CART} from './constants';
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

export function bikeInCart(bike, cart) {
    let result = false;
    cart.map(bikeAdded => {
        if (bike.id === bikeAdded.id) {result = true;}
    });
    return result;
}

export default function siteLayoutReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case ADD_TO_CART:
                console.log("Added to cart");
                draft.cart = [...draft.cart, action.bike];
                break;
            case REMOVE_FROM_CART:
                console.log("Remove from cart");
                const index = action.cart.findIndex(bike => bike.id === action.bike.id);
                draft.cart = [...action.cart.slice(0, index),
                    ...action.cart.slice(index + 1, action.cart.length)];
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
            case UPDATE_PAGE_FROM_CART:
                const cart = action.cart;
                const bikes = [...action.display.bikes];
                bikes.map((bike, index) => {
                    bikes[index] = {...bike, addedToCart: bikeInCart(bike, cart)};
                });
                draft.display = {...action.display, bikes};
                break;
            default:
                return state;
        }
    });
}