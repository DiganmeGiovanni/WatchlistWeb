import { connect } from "react-redux";
import { attemptLogin } from "../actions/UserActions";
import Login from "../components/welcome/Login";

const mapStateToProps = state => state.auth;

const mapDispatchToProps = dispatch => ({
    attemptLogin: credentials => dispatch(attemptLogin(credentials))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
