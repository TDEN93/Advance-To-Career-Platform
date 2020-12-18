import React, { Fragment } from 'react'

const Home = () => {
    return (
        <Fragment>
            {/* Top Section */}
            <section id="top-section">
                <div className="container-fluid top-section p-0 text-center text-lg-left mb-4 pt-0 pt-md-3">
                    <div className="row mt-4">
                        <div className="col-md order-md-2 px-md-4 mb-4 mt-lg-4 pt-md-0">
                            <h1 className="font-weight-bold">Developing Better Developers!</h1>
                            <p className="font-weight-bold px-auto">STEM internship projects for state and local governments.</p>
                            <div className="container p-0 d-flex justify-content-start justify-content-lg-start button-options mx-auto pl-lg-5">
                                <div className="row p-0 signup-btn">
                                    <div className="col px-1 ml-lg-1">
                                        <a className="btn btn-primary font-weight-bold" href="#">Students</a>
                                    </div>
                                    <div className="col px-1">
                                        <a className="btn btn-primary font-weight-bold" href="#">Project Owners</a>
                                    </div>
                                    <div className="col px-1">
                                        <a className="btn btn-primary font-weight-bold" href="#">Mentors</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-container col-md p-xs-0 px-md-0 d-flex mb-5">
                            <img src="../images/top-pic.png" className="mx-sm-auto mr-md-0" alt=""></img>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Section */}
            <section id="partners-section" className=" py-4 mb-5">
                <div className="container text-center">
                    <div className=" grey lighten-2 py-2">
                        <div className="flex-center">
                            <div className="row">
                                <div className="col-md-3 flex-center">
                                    <img src="../images/googleIMG.png" className="img-fluid"></img>
                                </div>
                                <div className="col-md-3 flex-center">
                                    <img src="../images/sonyIMG.png" className="img-fluid"></img>
                                </div>
                                <div className="col-md-3 flex-center">
                                    <img src="../images/facebookIMG.png" className="img-fluid"></img>
                                </div>
                                <div className="col-md-3 flex-center">
                                    <img src="../images/slackIMG.png" className="img-fluid"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Method Section */}
            <section id="methods-section" className="mb-5 p-4">
                <h3 className="font-weight-bold text-center mb-5">Why our methods work</h3>
                <div className="container w-100 p-0">
                    <div className="row d-flex justify-content-center p-0">
                        <div className="col-md d-flex justify-content-start p-0 m-0">
                            <div className="row">
                                <div className="col-5 col-md-12 d-flex justify-content-center">
                                    <h5>Accelerate</h5>
                                </div>
                                <div className="col d-flex justify-content-around text-center">
                                    <p>Speeding up the process of entering the industry</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex justify-content-center p-0 m-0">
                            <div className="row">
                                <div className="col-5 col-md-12 d-flex justify-content-center">
                                    <h5>Bridge</h5>
                                </div>
                                <div className="col d-flex justify-content-end text-center">
                                    <p>Closing the digital divide between acedmia and industry</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-block justify-content-center p-0 m-0">
                            <div className="row">
                                <div className="col-5 col-md-12 d-flex justify-content-center">
                                    <h5>Transition</h5>
                                </div>
                                <div className="col text-center text-center">
                                    <p>Gaining confidence and knowledge needed to be successful</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mentor Section */}
            <section id="mentors-section" className="p-4">
                <h3 className="text-center mb-3">Mentors</h3>
                <div className="container">
                    <div className="profiles d-flex justify-content-around">
                        <div className="profile">
                            <div className="img-container text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="profile-img"></img>
                            </div>
                            <h5 className="user-name text-center">Tray Denney</h5>
                            <h6 className="font-weight-bold text-muted text-center">Full Stack Developer</h6>
                            <p className="user-description text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="profile">
                            <div className="img-container text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="profile-img"></img>
                            </div>
                            <h5 className="user-name text-center">Verbus Counts</h5>
                            <h6 className="font-weight-bold text-muted text-center">Sub-title</h6>
                            <p className="user-description text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="profile">
                            <div className="img-container text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar8.png" class="profile-img"></img>
                            </div>
                            <h5 className="user-name text-center">Thomas Le</h5>
                            <h6 className="font-weight-bold text-muted text-center">Sub-title</h6>
                            <p className="user-description text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <div id="testimonials-section" className="container-fluid p-4 z-depth-1">
                <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                    <h3 className="text-center mb-4">Testimonials</h3>
                    <div className="row d-flex justify-content-start">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="d-md-flex justify-content-md-end justify-content-sm-center w-75 mx-auto">
                                <div className="overlay z-depth-1-half">
                                    <div className="img-container text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-fluid profile-img" alt="Profile Picture"></img>
                                    </div>
                                    <h5 className="text-center pt-4">Student Name</h5>
                                </div>
                            </div>
                        </div>
                        <div className="review col-md-6 mb-4 mb-md-0 d-flex flex-column justify-content-start">
                            <p className="pt-md-5 ">Loorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                ea commodo consequatrem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                ea commodo consequat.</p>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>

    )
}

export default Home
