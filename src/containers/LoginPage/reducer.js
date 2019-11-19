import {LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST} from './constants';
import {userService} from "../../utils/login.service";
import { produce } from 'immer';

const initialState = {
    credential: {
        username: '',
        password: ''
    },
    user: {
        firstName: '',
        lastName: '',
        email: '',
        token: '',
        expirationTime: 0
    },
    error: ''
};

export default function loginPageReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case LOG_IN_REQUEST:
                console.log("Requested");
                draft.credential = action.credential;
                break;
            case LOG_IN_SUCCESS:
                console.log("Login Success!");
                draft.user = action.user;
                break;
            case LOG_IN_FAILURE:
                console.log("Error caught!");
                draft.error = action.error;
                break;
            default:
                return state;
        }
    });
}