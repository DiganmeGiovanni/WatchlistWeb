import {createSlice} from "redux-starter-kit";
import APIWatchlist from "../../api/APIWatchlist";

const initialState = {
    lists: null
};

const listsSlice = createSlice({
    initialState: initialState,
    reducers: {
        onListsFetched(state, action) {
            state.lists = action.payload;
        }
    }
});

// Extract the action creators object and the reducer
const { actions, reducer } = listsSlice;
const { onListsFetched } = actions;

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
