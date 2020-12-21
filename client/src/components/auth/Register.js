import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';


const Register = props => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {

        if(isAuthenticated) {
            props.history.push('/projects');
        }

        if(error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }

        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        age: '',
        email: '',
        usertype: '',
        password: '',
        passwordconf: ''
    });

    const { firstname, lastname, gender, age, email, usertype, password, passwordconf } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if(firstname === '' || lastname === '' || gender === '' || age === '' || email === '' || usertype === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else if (password !== passwordconf) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({
                firstname,
                lastname,
                gender,
                age,
                email,
                usertype,
                password
            });
        }
        console.log(e)
    }

    return (
        <div className="tab-content" id="myTabContent">
        <div className="login tab-pane fade show active" id="login">
            <div className="container mb-5">
                <div className="row">

                    <div className="topdiv col-md-5 ml-auto col-lg-4 col-xl-5 py-4 bg-primary text-white text-center">
                        <div className="card-body align-self-stretch">
                        </div>
                    </div>

                    <div className="bottomdiv col-md-7 mr-auto col-lg-7 col-xl-5 border pt-4">
                        <h4 className="pb-3 font-weight-bold">Please fill with your details</h4>
                        <form onSubmit={onSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor='text'>First Name</label>
                                    <input className="form-control" type='text' name='firstname' value={firstname} onChange={onChange} required />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor='text'>Last Name</label>
                                    <input className="form-control" type='text' name='lastname' value={lastname} onChange={onChange} required />
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor='text'>Gender</label>
                                    <input className="form-control" type='text' name='gender' value={gender} onChange={onChange} required />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor='text'>Age</label>
                                    <input className="form-control" type='text' name='age' value={age} onChange={onChange} required />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor='email'>Email Address</label>
                                    <input className="form-control" type='email' name='email' value={email} onChange={onChange} required />
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor='selectform'>I am a...
                                    <select id="selectform" className="custom-select ml-4" onChange={onChange} name="usertype" required>
                                        <option name="usertype" value=""></option>
                                        <option name="usertype" value="0">Student</option>
                                        <option name="usertype" value="1">Project Owner</option>
                                        <option name="usertype" value="2">Mentor</option>
                                    </select>
                                    </label>
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor='password'>Password</label>
                                    <input className="form-control" type='password' name='password' value={password} onChange={onChange} required />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor='password'>Confirm Password</label>
                                    <input className="form-control" type='password' name='passwordconf' value={passwordconf} onChange={onChange} required />
                                </div>
                            </div>
                            <div className="form-row align-items-center">
                                {/* <div className="form-group col-md-12">
                                    <a href="#">
                                        <h6 className="m-0 text-center">Forgot Password?</h6>
                                    </a>
                                </div> */}
                                <input className="btn btn-primary btn-block submit-button w-75 mx-auto" type='submit' value='Register'/>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12 pt-4 d-flex justify-content-end pr-4">
                                    <Link to='/login'>Sign in</Link>
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

export default Register
