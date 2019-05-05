import {
    ON_LOGIN_STARTED,
    ON_LOGIN_SUCCESS,
    ON_LOGIN_FAILED
} from '../actions/actionTypes';

const initialState = {
    attemptingLogin: false,
    error: null,
    user: null
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case ON_LOGIN_STARTED:
            return { ...state, attemptingLogin: true };
        case ON_LOGIN_SUCCESS:
            return {
                attemptingLogin: false,
                error: null,
                user: action.user
            };
        case ON_LOGIN_FAILED:
            return {
                attemptingLogin: false,
                error: action.error,
                user: null
            };
        default:
            return state;
    }
};

export default auth;