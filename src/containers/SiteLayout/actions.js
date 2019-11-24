import {ADD_TO_CART, SEARCH, GO_TO_PAGE, DISPLAY, UPDATE_PAGE_FROM_CART, REMOVE_FROM_CART} from './constants';
import {DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE} from "./index";

export const addToCartAction = (bike) => {
    return {
        type: ADD_TO_CART,
        bike: {...bike, addedToCart: true}
    }
};

export const searchAction = (query, page = DEFAULT_CURRENT_PAGE, size = DEFAULT_PAGE_SIZE) => {
    return {
        type: SEARCH,
        query,
        pageQuery: {
            page,
            size
        }
    }
};

export const goToPageAction = (page, size, keyword = '') => {
    return {
        type: GO_TO_PAGE,
        query: {
            keyword
        },
        pageQuery: {
            page,
            size
        }
    }
};

export const displayAction = (bikes, page, size, totalRecords) => {
    return {
        type: DISPLAY,
        display: {
            bikes,
            page,
            size,
            totalRecords
        }
    }
};
export const updatePageFromCartAction = (bikes, page, size, totalRecords, cart) => {
    return {
        type: UPDATE_PAGE_FROM_CART,
        display: {
            bikes,
            page,
            size,
            totalRecords
        },
        cart
    }
};

export const removeFromCartAction = (cart, bike) => {
    return {
        type: REMOVE_FROM_CART,
        cart,
        bike: {...bike, addedToCart: false}
    }
}
