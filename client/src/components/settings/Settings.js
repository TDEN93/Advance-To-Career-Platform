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
    <div class="container">
        <header class="page-title-bar mt-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active">
                        <a href="user-profile.html">
                            <i class="breadcrumb-icon fa fa-angle-left mr-2"></i>User Full Name</a>
                    </li>
                </ol>
            </nav>
        </header>
        <div class="page-section">
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <div class="card card-fluid">
                        <h6 class="card-header font-weight-bold"> Your Details </h6>
                        <nav class="nav flex-column " id="options" role="tablist">
                            <a class="nav-link " id="account-set" data-toggle="tab" href="#account" role="tab" aria-controls="account" aria-selected="true">Account</a>
                            <a class="nav-link " id="notifications-set" data-toggle="tab" href="#notifications" role="tab" aria-controls="notifications" aria-selected="true">Notifications</a>
                        </nav>
                    </div>
                </div>
                <div class="tab-content col-lg-8">
                    <div class="card card-fluid tab-pane fade show active" id="account">
                        <h6 class="card-header font-weight-bold"> Account </h6>
                        <div class="card-body">
                            <form method="post">
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <label for="input01">First Name</label>
                                        <input type="text" class="form-control" id="input01" value={user.firstname} required=""></input>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="input02">Last Name</label>
                                        <input type="text" class="form-control" id="input02" value={user.lastname} required=""></input>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="input03">Email</label>
                                    <input type="email" class="form-control" id="input03" value={user.email} required=""></input>
                                </div>
                                <div class="form-group">
                                    <label for="input04">New Password</label>
                                    <input type="password" class="form-control" id="input04" value="" required=""></input>
                                </div>
                                <div class="form-actions">
                                    <div class="update-button text-right">
                                        <button type="submit" class="btn btn-primary mt-1">Update Account</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card card-fluid fade" id="notifications">
                        <h6 class="card-header font-weight-bold"> Notifications </h6>
                        <div class="list-group list-group-flush">
                            <div class="list-group-item d-flex justify-content-between align-items-center"> Someone sends you a message

                                <label class="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif03" class="switcher-input" checked></input>
                                    <span class="switcher-indicator"></span>
                                </label>
                            </div>
                            <div class="list-group-header bg-light">
                                <p class="ml-2 pt-3">Team Notifications</p>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center"> Someone invite you to a team

                                <label class="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif04" class="switcher-input" checked></input>
                                    <span class="switcher-indicator"></span>
                                </label>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center"> Someone update a team

                                <label class="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif05" class="switcher-input" checked></input>
                                    <span class="switcher-indicator"></span>
                                </label>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center"> Someone add new project

                                <label class="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif06" class="switcher-input"></input>
                                    <span class="switcher-indicator"></span>
                                </label>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center"> Someone update a project

                                <label class="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif07" class="switcher-input" checked></input>
                                    <span class="switcher-indicator"></span>
                                </label>
                            </div>
                            <div class="list-group-header bg-light">
                                <p class="ml-2 pt-3">Project Notifications</p>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center"> Someone update a team

                                <label class="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif08" class="switcher-input" checked></input>
                                    <span class="switcher-indicator"></span>
                                </label>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center"> Someone add new task

                                <label class="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif09" class="switcher-input" checked></input>
                                    <span class="switcher-indicator"></span>
                                </label>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center"> Someone update a task

                                <label class="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif10" class="switcher-input" checked></input>
                                    <span class="switcher-indicator"></span>
                                </label>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center"> Project deadline

                                <label class="switcher-control switcher-control-success">
                                    <input type="checkbox" name="notif14" class="switcher-input" checked></input>
                                    <span class="switcher-indicator"></span>
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
