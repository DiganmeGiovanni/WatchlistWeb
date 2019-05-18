import { connect } from "react-redux";
import { selectList, onListSelected } from "../reducers/listsReducers";
import { attemptLocalLogin } from "../reducers/authReducers";
import List from "../components/list/List";

const mapStateToProps = (state, ownProps) => {
    let listId = 0;
    if (!isNaN(ownProps.match.params.listId)) {
        listId = ownProps.match.params.listId * 1;
    }

    return {
        listId,
        list: state.lists.selectedList,
        selectedListId: state.lists.selectedListId,
        hasMovies: state.list.hasMovies,

        isFetching: state.list.isFetching,
        error: state.list.error,

        user: state.auth.user
    }
};

const mapDispatchToProps = dispatch => ({
    selectList: listId => dispatch(selectList(listId)),
    onListSelected: listId => dispatch(onListSelected(listId)),
    attemptLocalLogin: () => dispatch(attemptLocalLogin()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
