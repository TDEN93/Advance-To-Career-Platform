import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';


const Login = props => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {

        if(isAuthenticated) {
            props.history.push('/projects');
        }

        if(error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }

        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(email === '' || password === ''){
            setAlert("Please fill in all fields", 'danger');
        } else {
            login({
                email,
                password
            });
        }
    }

    return (
        <div className="tab-content mb-5" id="myTabContent">
        <div className="login tab-pane fade show active" id="login">
            <div className="container mt-2">
                <div className="row">

                    <div className="topdiv col-md-5 ml-auto col-lg-4 col-xl-5 py-4 bg-primary text-white text-center">
                        <div className="card-body">
                            <h2 className="py-3 font-weight-bold">Good to see you again!</h2>
                            <p className="pt-md-4 px-sm-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="bottomdiv col-md-7 mr-auto col-lg-7 col-xl-5 border">
                        <h3 className="py-4 font-weight-bold heading3">Please fill with your details</h3>
                        <form onSubmit={onSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor='email'>Email Address</label>
                                    <input className="form-control" type='email' name='email' value={email} onChange={onChange} required />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor='password'>Password</label>
                                    <input className="form-control" type='password' name='password' value={password} onChange={onChange} required />
                                </div>
                            </div>
                            <div className="form-row align-items-center">
                                <div className="form-group col-md-12">
                                    <a href="/">
                                        <h6 className="m-0 text-center">Forgot Password?</h6>
                                    </a>
                                </div>
                                <input className="btn btn-primary btn-block submit-button w-75 mx-auto" type='submit' value='Login'/>
                            </div>
                            <div className="form-row">
                                <div className="text-center form-group col-md-12 pt-4">
                                    <Link to='/register'>Create an account</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login
