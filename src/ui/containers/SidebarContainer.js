import { connect } from "react-redux";
import { fetchLists } from "../reducers/listsReducers";
import Sidebar from "../components/sidebar/Sidebar";

const mapStateToProps = state => ({
    user: state.auth.user,
    lists: state.listsContainer.lists
});
const mapDispatchToProps = dispatch => ({
    fetchLists: userId => dispatch(fetchLists(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
