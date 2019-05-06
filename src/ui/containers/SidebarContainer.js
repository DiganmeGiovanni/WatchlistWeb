import { connect } from "react-redux";
import Sidebar from "../components/sidebar/Sidebar";

const mapStateToProps = state => ({
    user: state.auth.user,
    lists: []
});

export default connect(
    mapStateToProps
)(Sidebar);
