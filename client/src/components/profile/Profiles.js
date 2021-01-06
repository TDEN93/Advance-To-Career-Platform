import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';



const Profiles = () => {

    const authContext = useContext(AuthContext);
    const { user } = authContext;

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    if(authContext.loading !== true) {
        return (
            <div id="profile-section">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Profile" className="rounded-circle" width="150"></img>
                                        <div className="mt-3">
                                            <h4>{user.firstname} {user.lastname}</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">Edmond, OK</p>
                                            <button className="btn btn-primary mr-lg-2 mr-2 mr-md-0 ">Follow</button>
                                            <button className="btn btn-outline-primary mt-md-2 mt-lg-0 mt-sm-0">Message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Website</h6>
                                        <span className="text-secondary">User's Website Link</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Github</h6>
                                        <span className="text-secondary">User's Github Link</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-7 text-secondary">
                                            {user.firstname} {user.lastname}
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-7 text-secondary">
                                            {user.email}
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Mobile Phone</h6>
                                        </div>
                                        <div className="col-sm-7 text-secondary">
                                            user.phone#
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-7 text-secondary">
                                            user.address
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mb-3 p-0">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-3 p-0">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
    return (
        <div>
        </div>
    )
}

export default Profiles
