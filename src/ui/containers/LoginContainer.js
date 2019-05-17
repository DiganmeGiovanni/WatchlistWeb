import { connect } from "react-redux";
import { attemptLogin, attemptLocalLogin } from "../reducers/authReducers"
import Login from "../components/welcome/Login";

const mapStateToProps = state => state.auth;

const mapDispatchToProps = dispatch => ({
    attemptLogin: credentials => dispatch(attemptLogin(credentials)),
    attemptLocalLogin: () => dispatch(attemptLocalLogin())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
