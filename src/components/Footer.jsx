import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-light" style={{ backgroundImage: "url(assets/img/shape/8.png)" }}>
        <div className="container">
            <div className="f-items default-padding">
                <div className="row">
                    
                    <div className="col-lg-5 col-md-6 item">
                        <div className="footer-item about">
                            <img className="logo" src="assets/img/logo-light.png" alt="Logo" />
                            <p>
                                Happen active county. Winding morning ambition shyness evident to poor. Because elderly new to the point to main success.
                            </p>
                            <form action="#">
                                <input type="email" placeholder="Your Email" className="form-control" name="email" />
                                <button type="submit"> Go</button>  
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 item">
                        <div className="footer-item link">
                            <h4 className="widget-title">Explore</h4>
                            <ul>
                                <li>
                                    <Link to={'/aboutus'}>About Us</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Meet Our Team</Link>
                                </li>
                                <li>
                                    <Link to={'/services'}>Services</Link>
                                </li>
                                <li>
                                    <Link to={'/contactus'}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 item">
                        <div className="footer-item contact">
                            <h4 className="widget-title">Contact Info</h4>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-home"></i>
                                    </div>
                                    <div className="content">
                                        <strong>Address:</strong>
                                        5919 Lagos, Nigeria
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="content">
                                        <strong>Email:</strong>
                                        <a href="mailto:info@barnfeed.com">info@barnfeed.com</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="content">
                                        <strong>Phone:</strong>
                                        <a href="tel:2151234567">+234 34598768</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className="footer-bottom text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <p>&copy; Copyright {new Date().getFullYear()}. All Rights Reserved by <a href="https://buildingblockstec.com/" target="_blank" rel='noreferrer' >buildingblocks</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="shape-right-bottom">
            <img src="assets/img/shape/7.png" alt="Not Found" />
        </div>
    </footer>
    )
}

export default Footer;