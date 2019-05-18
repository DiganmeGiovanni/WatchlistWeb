import {createSlice} from "redux-starter-kit";
import { push } from "connected-react-router";
import APIWatchlist from "../../api/APIWatchlist";

const initialState = {
    selectedList: null,
    selectedListId: null,
    lists: null
};

const listsSlice = createSlice({
    initialState: initialState,
    reducers: {
        onListsFetched(state, action) {
            state.lists = action.payload;
        },
        onListSelected(state, action) {
            state.selectedListId = action.payload * 1;

            if (state.lists) {
                for (let list of state.lists) {
                    if (list.id === state.selectedListId) {
                        state.selectedList = list;
                        break;
                    }
                }
            }
        }
    }
});

// Extract the action creators object and the reducer
const { actions, reducer } = listsSlice;
export const { onListsFetched, onListSelected } = actions;

export const selectList = (listId) => {
    return dispatch => {
        dispatch(onListSelected(listId));
        dispatch(push(`/list/${ listId }`))
    }
};

export const fetchLists = (userId) => {
    return (dispatch, getState) => {
        return APIWatchlist.getLists(userId)
            .then(response => {
                if (response.status === 200) {
                    dispatch(onListsFetched(response.data));

                    if (getState().lists.selectedListId !== null) {
                        dispatch(onListSelected(getState().lists.selectedListId))
                    } else {
                        for (let list of response.data) {
                            if (list.is_default_list) {
                                selectList(list.id)
                            }
                        }
                    }
                }
            })
    }
};

export default reducer;
