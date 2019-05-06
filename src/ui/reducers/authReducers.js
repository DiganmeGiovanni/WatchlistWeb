import {createSlice} from "redux-starter-kit";
import APIWatchlist from "../../api/APIWatchlist";

const initialState = {
    attemptingLogin: false,
    error: null,
    user: null
};

const authSlice = createSlice({
    // slice: 'auth',
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

export const attemptLogin = (credentials) => {
    return dispatch => {
        dispatch(onLoginStarted());

        return APIWatchlist.login(credentials)
            .then(response => {
                if (response.status === 200) {
                    dispatch(onLoginSuccess(response.data))
                } else {
                    onLoginFailed("Login failed, please retry")
                }
            })
    }
};
export default reducer;