import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className="navbar mobile-sidenav inc-shape navbar-sticky navbar-default validnavs dark">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="navbar-brand-left">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src="/assets/img/logo-mix.png" className="logo" alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <img src="/assets/img/logo.png" alt="Logo" />
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-times"></i>
                        </button>
                    
                        <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle active" data-toggle="dropdown" >Home</a>
                                <ul className="dropdown-menu">
                                    <li><a href="index.html">Home Agriculture</a></li>
                                    <li><a href="index-2.html">Home Farming</a></li>
                                    <li><a href="index-3.html">Agriculture Shop</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Pages</a>
                                <ul className="dropdown-menu">
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="farmers.html">Team</a></li>
                                    <li><a href="farmer-details.html">Team Details</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="404.html">Error Page</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="project.html" className="dropdown-toggle" data-toggle="dropdown" >Projects</a>
                                <ul className="dropdown-menu">
                                    <li><a href="project.html">Project</a></li>
                                    <li><a href="project-details.html">Project Details</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Services</a>
                                <ul className="dropdown-menu">
                                    <li><a href="services.html">Services Version One</a></li>
                                    <li><a href="services-2.html">Services Version Two</a></li>
                                    <li><a href="services-details.html">Services Details</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="overlay-screen"></div>
            </nav>
        </header>
    )
}

export default Header;