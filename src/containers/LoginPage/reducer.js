import {LOG_IN_SUCCESS, LOG_IN_FAILURE} from './constants';
const initialState = {
    userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        token: '',
        expirationTime: 0
    },
    error: ''
};

export default function loginPageReducer(state = initialState, action) {
    switch (action) {
        case LOG_IN_SUCCESS:
            state.userInfo = action.userInfo;
        case LOG_IN_FAILURE:
            state.error = action.error;
    }
}