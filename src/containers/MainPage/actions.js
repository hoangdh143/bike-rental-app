import {ADD_TO_CART, SEARCH, GO_TO_PAGE}  from './constants';
export const addToCart = (bike) => {
    return {
        type: ADD_TO_CART,
        bike
    }
};

export const search = (query) => {
    return {
        type: SEARCH,
        query
    }
};

export const goToPage = (page, size) => {
    return {
        type: GO_TO_PAGE,
        page,
        size
    }
}
