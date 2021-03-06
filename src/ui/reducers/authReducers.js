import {createSlice} from "redux-starter-kit";
import APIWatchlist from "../../api/APIWatchlist";
import AuthService from "../../auth/AuthService";

const initialState = {
    attemptingLogin: false,
    error: null,
    user: null
};

const authSlice = createSlice({
    initialState: initialState,
    reducers: {
        onLoginStarted(state) {
            state.attemptingLogin = true
        },
        onLoginSuccess(state, action) {
            state.attemptingLogin = false;
            state.error = null;
            state.user = action.payload;
        },
        onLoginFailed(state, action) {
            state.attemptingLogin = false;
            state.error = action.error;
            state.user = null;
        }
    }
});

// Extract the action creators object and the reducer
const { actions, reducer } = authSlice;
const { onLoginStarted, onLoginSuccess, onLoginFailed } = actions;

export const attemptLocalLogin = () => {
    return dispatch => {
        dispatch(onLoginStarted());

        if (AuthService.isSessionActive()) {
            let token = AuthService.currentSessionToken();
            let user = AuthService.currentUser();

            APIWatchlist.setAuthToken(token);
            dispatch(onLoginSuccess(user));
        }
    }
};

export const attemptLogin = (credentials) => {
    return dispatch => {
        dispatch(onLoginStarted());

        return APIWatchlist.login(credentials)
            .then(response => {
                if (response.status === 200 && response.data.success) {

                    // Persist token on local storage for future
                    // requests
                    AuthService.storeSession(
                        response.data.user,
                        response.data.token
                    );

                    APIWatchlist.setAuthToken(response.data.token);
                    dispatch(onLoginSuccess(response.data.user))
                } else {
                    dispatch(onLoginFailed("Login failed, please retry"))
                }
            })
    }
};

export default reducer;