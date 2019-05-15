import { createSlice } from "redux-starter-kit";
import APIWatchlist from "../../api/APIWatchlist";

const initialState = {
    isFetching: false,
    error: null,
    hasMovies: [],
};

const listSlice = createSlice({
    initialState: initialState,
    reducers: {
        onFetchStarted(state) {
            state.isFetching = true;
            state.error = null;
            state.hasMovies = [];
        },
        onFetchSuccessful(state, action) {
            state.isFetching = false;
            state.error = null;
            state.hasMovies = action.payload;
        },
        onFetchFailed(state, action) {
            state.isFetching = false;
            state.error = action.payload;
            state.hasMovies = [];
        }
    }
});

// Extract actions
const { onFetchStarted, onFetchSuccessful, onFetchFailed } = listSlice.actions;

export const fetchMovies = (listId) => {
    return dispatch => {
        dispatch(onFetchStarted());

        return APIWatchlist.getMovies(listId)
            .then(response => {
                if (response.status === 200) {
                    dispatch(onFetchSuccessful(response.data))
                } else {
                    dispatch(onFetchFailed("Movie fetch failed"))
                }
            })
    }
};
export default listSlice.reducer;
