import {ADD_TO_CART, SEARCH, GO_TO_PAGE, DISPLAY} from './constants';
import {DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE} from "./index";
export const addToCartAction = (bike) => {
    return {
        type: ADD_TO_CART,
        bike
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
}
