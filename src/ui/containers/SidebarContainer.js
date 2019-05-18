import { connect } from "react-redux";
import { fetchLists, selectList } from "../reducers/listsReducers";
import Sidebar from "../components/sidebar/Sidebar";

const mapStateToProps = state => ({
    user: state.auth.user,
    lists: state.lists.lists,
    selectedList: state.lists.selectedList,
    selectedListId: state.lists.selectedListId
});
const mapDispatchToProps = dispatch => ({
    fetchLists: userId => dispatch(fetchLists(userId)),
    selectList: listId => dispatch(selectList(listId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
