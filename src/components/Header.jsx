import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/")[1];

  return (
    <header>
      <nav className="navbar mobile-sidenav inc-shape navbar-sticky navbar-default validnavs dark">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="navbar-brand-left">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i className="fa fa-bars"></i>
              </button>
              <Link className="navbar-brand" to={'/'}>
                <img src="/assets/img/logo-mix.png" className="logo" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <img src="/assets/img/logo.png" alt="Logo" />
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i className="fa fa-times"></i>
            </button>

            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li>
                <Link
                  to={'/'}
                  className={splitLocation === "" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={'/aboutus'}
                  className={splitLocation === "/aboutus" ? "active" : ""}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={'/services'}
                  className={splitLocation === "/services" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={'/contactus'}
                  className={splitLocation === "/contactus" ? "active" : ""}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="overlay-screen"></div>
      </nav>
    </header>
  );
};

export default Header;
