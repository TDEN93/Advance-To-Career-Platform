import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small stylish-color-dark pt-4">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <h4 className="font-weight-bold text-uppercase mt-3 mb-4 text-primary mx-auto">A2C</h4>
                            <p>Developing Better Developers</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none"></hr>
                        <div className="col-md-4">
                            <h5 className="font-weight-bold text-uppercase mt-1 mb-2">Links</h5>
                            <ul className="list-unstyled d-flex flex-column">
                                <li className="pt-1">
                                    <a href="#!">How It Works</a>
                                </li>
                                <li className="pt-1">
                                    <a href="#!">Partners</a>
                                </li>
                                <li className="pt-1">
                                    <a href="#!">Mentors</a>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none"></hr>
                    </div>
                </div>
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a href="https://www.instagram.com" className="nav-link fa fa-instagram sizing"></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.twitter.com" className="nav-link fa fa-twitter sizing"></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.facebook.com" className="nav-link fa fa-facebook sizing"></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.linkedin.com" className="nav-link fa fa-linkedin sizing"></a>
                    </li>
                </ul>
                <div className="footer-copyright text-center">© 2020 Copyright:
                    <a href="#"> EQuest.US</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
