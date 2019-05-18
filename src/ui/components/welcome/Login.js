import React from "react";
import PropTypes from "prop-types";
import FBAuthService from "../../../auth/FBAuthService";
import { userType } from "../../types/WatchlistTypes";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onFbLoginClicked = this.onFbLoginClicked.bind(this);

        this.state = {
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        FBAuthService.initSdk(() => {
            this.setState({ loading: false })
        });

        this.props.attemptLocalLogin();
    }

    makeLoading() {
        return <div className="mt-5">
            <i className="title">Espera un momento</i>
            <br/><br/>
            <span className="fas fa-spin fa-3x fa-spinner"/>
        </div>
    }

    makeLoginButtons() {
        if (this.props.user) {
            return <div className="mt-5">
                <i className="title">
                    Bienvenido "{this.props.user.name}"
                </i>
                <br/><br/>
                <span className="fas fa-spin fa-3x fa-spinner"/>
            </div>
        }

        return <React.Fragment>
            <div className="mt-3">
                <button className="btn-facebook"
                        onClick={ this.onFbLoginClicked }
                >
                    Entrar con facebook
                </button>
            </div>

            <div className="mt-3">
                <button className="btn-google">
                    Entrar con Google
                </button>
            </div>
        </React.Fragment>
    }

    makeErrors() {
        return <>
            { this.makeError(this.props.error) }
            { this.makeError(this.state.error) }
        </>
    }

    makeError(error) {
        if (!error) return;

        return <div className="row">
            <div className="col-xl-6 offset-xl-3 pt-4">
                <div className="alert alert-danger">
                    { error }
                </div>
            </div>
        </div>
    }

    onFbLoginClicked() {
        this.setState({ loading: true });

        FBAuthService.login(response => {
            if (!response.success) {
                this.setState({
                    loading: false,
                    error: "Debes iniciar sesión para poder utilizar la aplicación"
                });
                return;
            }

            // Authenticate on backend and persist on local storage
            let credentials = {
                name: response.user.name,
                email: response.user.email,
                picture: response.user.picture,
                auth_provider_id: 1, // Facebook,
                token: response.user.token
            };
            this.props.attemptLogin(credentials);
        });
    }

    render() {
        return (
            <div className="section-login">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-8 offset-lg-2 text-center">
                            <div className="title">
                                Arma tu playlist para esos fines de semana en el sofa
                                y compartela con tus amigos
                            </div>

                            { this.makeErrors() }
                            { this.state.loading || this.props.attemptingLogin
                                ? this.makeLoading()
                                : this.makeLoginButtons()
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    attemptingLogin: PropTypes.bool.isRequired,
    error: PropTypes.string,
    user: userType,

    attemptLogin: PropTypes.func.isRequired,
    attemptLocalLogin: PropTypes.func.isRequired
};

export default Login;
