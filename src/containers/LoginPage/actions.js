import {LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS} from "./constants";

export const loginRequestAction = (username, password) => {
    return {
        type: LOG_IN_REQUEST,
        credential: {username, password}
    }
};

export const loginSuccessAction = (user) => {
    return {
        type: LOG_IN_SUCCESS,
        user
    }
};

export const loginFailureAction = (error) => {
    return {
        type: LOG_IN_FAILURE,
        error
    }
};