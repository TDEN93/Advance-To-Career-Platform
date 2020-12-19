import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';



const Settings = () => {

    const authContext = useContext(AuthContext);
    const { user } = authContext;


    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    if(authContext.loading !== true) {
        return (
    <div className="container mb-4">
        <header className="page-title-bar mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">
                        <a href="user-profile.html">
                            <i className="breadcrumb-icon fa fa-angle-left mr-2"></i>{user.firstname} {user.lastname}</a>
                    </li>
                </ol>
            </nav>
        </header>
        <div className="page-section">
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="card card-fluid">
                        <h6 className="card-header font-weight-bold"> Your Details </h6>
                        <nav className="nav flex-column " id="options" role="tablist">
                            <a className="nav-link " id="account-set" data-toggle="tab" href="#account" role="tab" aria-controls="account" aria-selected="true">Account</a>
                            <a className="nav-link " id="notifications-set" data-toggle="tab" href="#notifications" role="tab" aria-controls="notifications" aria-selected="true">Notifications</a>
                        </nav>
                    </div>
                </div>
                <div className="tab-content col-lg-8">
                    <div className="card card-fluid tab-pane fade show active" id="account">
                        <h6 className="card-header font-weight-bold"> Account </h6>
                        <div className="card-body">
                            <form method="post">
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label for="input01">First Name</label>
                                        <input type="text" className="form-control" id="input01" defaultValue={user.firstname} required></input>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="input02">Last Name</label>
                                        <input type="text" className="form-control" id="input02" defaultValue={user.lastname} required></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="input03">Email</label>
                                    <input type="email" className="form-control" id="input03" defaultValue={user.email} required></input>
                                </div>
                                <div className="form-group">
                                    <label for="input04">New Password</label>
                                    <input type="text" className="form-control" id="input04" defaultValue="" required></input>
                                </div>
                                <div className="form-actions">
                                    <div className="update-button text-right">
                                        <button type="submit" className="btn btn-primary mt-1">Update Account</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card card-fluid fade" id="notifications">
                        <h6 className="card-header font-weight-bold"> Notifications </h6>
                        <div className="list-group list-group-flush">
                            <div className="list-group-item d-flex justify-content-between align-items-center"> Someone sends you a message

                                <label className="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif03" className="switcher-input" checked></input>
                                    <span className="switcher-indicator"></span>
                                </label>
                            </div>
                            <div className="list-group-header bg-light">
                                <p className="ml-2 pt-3">Team Notifications</p>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center"> Someone invite you to a team

                                <label className="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif04" className="switcher-input" checked></input>
                                    <span className="switcher-indicator"></span>
                                </label>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center"> Someone update a team

                                <label className="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif05" className="switcher-input" checked></input>
                                    <span className="switcher-indicator"></span>
                                </label>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center"> Someone add new project

                                <label className="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif06" className="switcher-input"></input>
                                    <span className="switcher-indicator"></span>
                                </label>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center"> Someone update a project

                                <label className="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif07" className="switcher-input" checked></input>
                                    <span className="switcher-indicator"></span>
                                </label>
                            </div>
                            <div className="list-group-header bg-light">
                                <p className="ml-2 pt-3">Project Notifications</p>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center"> Someone update a team

                                <label className="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif08" className="switcher-input" checked></input>
                                    <span className="switcher-indicator"></span>
                                </label>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center"> Someone add new task

                                <label className="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif09" className="switcher-input" checked></input>
                                    <span className="switcher-indicator"></span>
                                </label>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center"> Someone update a task

                                <label className="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif10" className="switcher-input" checked></input>
                                    <span className="switcher-indicator"></span>
                                </label>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center"> Project deadline

                                <label className="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif14" className="switcher-input" checked></input>
                                    <span className="switcher-indicator"></span>
                                </label>
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

export default Settings
