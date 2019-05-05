import React from 'react';

const Login = () => {

    return (
        <div className="section-content section-login">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-8 offset-lg-2 text-center">
                        <div className="title">
                            Arma tu playlist para esos fines de semana en el sofa
                            y compartela con tus amigos
                        </div>

                        <div className="mt-5">
                            <button className="btn-facebook">
                                Entrar con facebook
                            </button>
                        </div>

                        <div className="mt-3">
                            <button className="btn-google">
                                Entrar con Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;
