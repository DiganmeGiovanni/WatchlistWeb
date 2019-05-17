import { connect } from "react-redux";
import { selectList } from "../reducers/listsReducers";
import { attemptLocalLogin } from "../reducers/authReducers";
import List from "../components/list/List";

const mapStateToProps = (state, ownProps) => ({
    listId: ownProps.match.params.listId,
    list: state.lists.selectedList,
    isFetching: state.list.isFetching,
    error: state.list.error,
    hasMovies: state.list.hasMovies,

    user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
    selectList: listId => dispatch(selectList(listId)),
    attemptLocalLogin: () => dispatch(attemptLocalLogin())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
