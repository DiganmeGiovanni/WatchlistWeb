import React from "react";
import PropTypes from "prop-types";

const Login = ({ attemptingLogin, error, user, attemptLogin }) => {

    const makeLoading = () => (
            <div className="mt-5">
                <span>Espera un momento</span>
                <br/><br/>
                <span className="fas fa-spin fa-3x fa-spinner"/>
            </div>
    );

    const makeLoginButtons = () => {
        if (user !== null) {
            return <div className="mt-5">
                <i className="title">
                    Bienvenido "{user.name}"
                </i>
                <br/><br/>
                <span className="fas fa-spin fa-3x fa-spinner"/>
            </div>
        }

        return <React.Fragment>
            <div className="mt-5">
                <button className="btn-facebook"
                        onClick={() => attemptLogin({token: 'hack'})}
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
    };

    return (
        <div className="section-content section-login">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-8 offset-lg-2 text-center">
                        <div className="title">
                            Arma tu playlist para esos fines de semana en el sofa
                            y compartela con tus amigos
                        </div>

                        { attemptingLogin ? makeLoading() : makeLoginButtons() }
                    </div>
                </div>
            </div>
        </div>
    )
};

Login.propTypes = {
    attemptingLogin: PropTypes.bool.isRequired,
    error: PropTypes.string,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired
    }),
    attemptLogin: PropTypes.func.isRequired
};

export default Login;
