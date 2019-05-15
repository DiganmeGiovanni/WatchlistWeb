import { createSlice } from "redux-starter-kit";
import { fetchMovies } from "./listReducers";
import APIWatchlist from "../../api/APIWatchlist";

const initialState = {
    selectedList: null,
    lists: null
};

const listsSlice = createSlice({
    initialState: initialState,
    reducers: {
        onListsFetched(state, action) {
            state.lists = action.payload;
        },
        onListSelected(state, action) {
            for (let list of state.lists) {
                if (list.id === action.payload) {
                    state.selectedList = list;
                    break;
                }
            }
        }
    }
});

// Extract the action creators object and the reducer
const { actions, reducer } = listsSlice;
const { onListsFetched, onListSelected } = actions;

export const selectList = (listId) => {
    return dispatch => {
        dispatch(onListSelected(listId));
        dispatch(fetchMovies(listId));
    }
};
export const fetchLists = (userId) => {
    return dispatch => {
        return APIWatchlist.getLists(userId)
            .then(response => {
                if (response.status === 200) {
                    dispatch(onListsFetched(response.data));
                }
            })
    }
};
export default reducer;
