import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ProjectContext from '../../context/project/projectContext';


const Navbar = ({ title, icon }) => {

    const authContext = useContext(AuthContext);
    const projectContext = useContext(ProjectContext);

    const { isAuthenticated, logout, user } = authContext;
    const { clearProjects } = projectContext;

    const onLogout = () => {
        logout();
        clearProjects();
    }

    const authLinks = (
        <Fragment>
            {/*<ul className="navbar-nav w-100 justify-content-center middle-tabs">
<<<<<<< HEAD
                { <li className="nav-item"><a className="nav-link" href="#top-section">Overview</a></li>
                <li className="nav-item"><a className="nav-link" href="#methods-sec">How it works</a></li> }
                { <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li> }
                { <li className="nav-item"><a className="nav-link" href="#partners-sec">Partners</a></li> }
=======
                <li className="nav-item"><a className="nav-link" href="#top-section">Overview</a></li>
                <li className="nav-item"><a className="nav-link" href="#methods-section">How it works</a></li>
                <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                <li className="nav-item"><a className="nav-link" href="#partners-section">Partners</a></li>
>>>>>>> b27bc6d293bf26b6642c96b5d8fe70d246673518
            </ul>*/}
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {user && user.firstname}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                        <Link className="dropdown-item" to="/{user._id}/profile">Profile</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/{user._id}/settings">Settings</Link>
                        <Link className="dropdown-item" onClick={onLogout} to="#!">Logout</Link>
                    </div>
                </li>
            </ul>

        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            {/* <ul className="navbar-nav w-100 justify-content-center middle-tabs">
                <li className="nav-item"><a className="nav-link" href="#top-section">Overview</a></li>
<<<<<<< HEAD
                <li className="nav-item"><a className="nav-link" href="#methods-sec">How it works</a></li>
                <li className="nav-item"><a className="nav-link" href="#partners-sec">Partners</a></li>
            </ul> */}
            <ul className="navbar-nav ml-auto">
{/*=======*/}
                <li className="nav-item"><a className="nav-link" href="#methods-section">How it works</a></li>
                <li className="nav-item"><a className="nav-link" href="#partners-section">Partners</a></li>
            </ul>
            <ul className="navbar-nav">
{/*>>>>>>> b27bc6d293bf26b6642c96b5d8fe70d246673518*/}
                <li className="nav-item">
                    <Link to='/register' className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/login'>Login</Link>
                </li>
            </ul>
        </Fragment>
    );

    return (
        <div>
            <div class="navbar-place bg-light py-1 pt-3">
                <nav className="navbar text-warning navbar-expand-md bg-light">
                    <Link className="navbar-brand" to='/'>{title}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#top-of-page" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="top-of-page">
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </nav>
            </div>
        </div>
    )
}



Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'A2C',
    icon: 'fas fa-id-card-alt'
}

export default Navbar
