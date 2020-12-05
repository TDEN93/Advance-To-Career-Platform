import React, { Fragment } from 'react'

const Home = () => {
    return (
        <Fragment>
            {/* Top Section */}
            <section id="top-section">
                <div className="container-fluid top-section p-0 text-center text-lg-left mb-4 pt-4">
                    <div className="row mt-4">
                        <div className="col-md order-md-2 px-md-4 mb-4 mt-lg-4 pt-md-0">
                            <h1 className="font-weight-bold">Developing Better Developers!</h1>
                            <p className="font-weight-bold px-auto">STEM internship projects for state and local governments.</p>
                            <div className="container p-0 d-flex justify-content-start justify-content-lg-start button-options">
                                <div className="row p-0">
                                    <div className="col px-2 ml-lg-1">
                                        <a className="btn btn-primary font-weight-bold" href="#">Students</a>
                                    </div>
                                    <div className="col px-2">
                                        <a className="btn btn-primary font-weight-bold" href="#">Project Owners</a>
                                    </div>
                                    <div className="col px-2">
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

            {/* Method Section */}
            <section id="methods-section" className="mx-4">
                <h2 className="font-weight-bold text-center mb-5">Why our methods work</h2>
                <div className="container mb-4 w-100 p-0">
                    <div className="row d-flex justify-content-center p-0">
                        <div className="col-md d-flex justify-content-center p-0 m-0">
                            <div className="row">
                                <div className="col col-md-12 d-flex justify-content-center">
                                    <p>Sub-Topic</p>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-flex justify-content-center p-0 m-0">
                            <div className="row">
                                <div className="col-6 col-md-12 order-2 order-md-1 d-flex justify-content-center">
                                    <p>Sub-Topic</p>
                                </div>
                                <div className="col order-1 order-md-2 d-flex justify-content-end">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md d-block justify-content-center p-0 m-0">
                            <div className="row">
                                <div className="col-6 col-md-12 d-flex justify-content-center">
                                    <p>Sub-Topic</p>
                                </div>
                                <div className="col">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mentor Section */}
            <section id="mentors-section" className="mb-5 bg-light">
                <h2 className="font-weight-bold text-center mb-3 pt-4">Mentors</h2>
                <div id="controls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <img className="d-block rounded-circle" src="../images/verbus.png" alt="First slide"></img>
                                    </div>
                                    <div className="col">
                                        <p>Verbus is a skilled senior software consultant and IT project manager. Having worked in the realm of programming and technology for over 50 years, he is experienced in software
                                            development management, database administration, system analysis, and systems programming.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <img className="d-block rounded-circle" src="../images/verbus.png" alt="First slide"></img>
                                    </div>
                                    <div className="col">
                                        <p>Verbus is a skilled senior software consultant and IT project manager. Having worked in the realm of programming and technology for over 50 years, he is experienced in software
                                            development management, database administration, system analysis, and systems programming.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <img className="d-block rounded-circle" src="../images/verbus.png" alt="First slide"></img>
                                    </div>
                                    <div className="col">
                                        <p>Verbus is a skilled senior software consultant and IT project manager. Having worked in the realm of programming and technology for over 50 years, he is experienced in software
                                            development management, database administration, system analysis, and systems programming.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#controls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#controls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>

            {/* Partner Section */}
            <section id="partners-section" className="mb-5">
                <h2 className="font-weight-bold text-center mt-4">Partners</h2>
                <p className="mb-4 text-center">Well respected people and companies from around the world</p>
                <div className="container mb-4">
                    <div className="partner-container d-flex flex-wrap justify-content-around">
                        <h4 className="mx-3">Image Placeholders</h4>
                        <h4 className="mx-3">Image Placeholders</h4>
                        <h4 className="mx-3">Image Placeholders</h4>
                        <h4 className="mx-3">Image Placeholders</h4>
                        <h4 className="mx-3">Image Placeholders</h4>
                        <h4 className="mx-3">Image Placeholders</h4>
                    </div>
                </div>
            </section>
        </Fragment>

    )
}

export default Home