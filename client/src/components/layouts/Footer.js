import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col">
                            <a href="#top-of-page">
                                <h4>A2C</h4>
                            </a>
                            <ul className="nav mt-3 info">
                                <li className="nav-item text-muted">
                                    <a href="top-of-page" className="nav-link pl-0 mr-2">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#methods-section" className="nav-link pl-0 mr-2">Methods</a>
                                </li>
                                <li className="nav-item">
                                    <a href="projects.html" className="nav-link pl-0 mr-2">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#mentors-sections" className="nav-link pl-0 mr-2">Mentors</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#partners-section" className="nav-link pl-0 mr-2">Partners</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-6 mt-3 mt-lg-0">
                            <div className="row">
                                <div className="col-12">
                                    <div className="action pl-4">
                                        <ul className="list-unstyled action">
                                            <li className="list-inline-item">
                                                <h5 className="mr-2">Sign up for free!</h5>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="/register"><button type="submit" className="btn btn-primary px-3">Register</button></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*
                                <div class="col-12 mt-3 mt-lg-0">
                                    <div class="row">
                                        <div class="col social-box d-flex justify-content-end">
                                            <div class="mt-3 social">
                                                <ul class="nav">
                                                    <li class="nav-item">
                                                        <a href="https://www.instagram.com" class="nav-link fa fa-instagram sizing"></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="https://www.twitter.com" class="nav-link fa fa-twitter sizing"></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="https://www.facebook.com" class="nav-link fa fa-facebook sizing"></a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="https://www.linkedin.com" class="nav-link fa fa-linkedin sizing"></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
