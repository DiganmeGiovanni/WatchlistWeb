import { connect } from "react-redux";
import { selectList } from "../reducers/listsReducers";
import List from "../components/list/List";

const mapStateToProps = (state, ownProps) => ({
    listId: ownProps.match.params.listId,
    list: state.listsContainer.selectedList,
    isFetching: state.list.isFetching,
    error: state.list.error,
    hasMovies: state.list.hasMovies,
});

const mapDispatchToProps = dispatch => ({
    selectList: listId => dispatch(selectList(listId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
