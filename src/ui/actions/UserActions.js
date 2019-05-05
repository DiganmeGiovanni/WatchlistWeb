import {
    ON_LOGIN_STARTED,
    ON_LOGIN_SUCCESS,
    ON_LOGIN_FAILED
} from './actionTypes';
import APIWatchlist from '../../api/APIWatchlist';

export function attemptLogin(credentials) {
    return dispatch => {
        dispatch(onLoginStarted());

        return APIWatchlist.login(credentials)
            .then(response => {
                if (response.status === 200) {
                    dispatch(onLoginSuccessful(response.data))
                } else {
                    onLoginFailed("Login failed, please retry")
                }
            })
    }
}

export function onLoginStarted() {
    return {
        type: ON_LOGIN_STARTED
    }
}

export function onLoginSuccessful(user) {
    return {
        type: ON_LOGIN_SUCCESS,
        user
    }
}

export function onLoginFailed(error) {
    return {
        type: ON_LOGIN_FAILED,
        error
    }
}
