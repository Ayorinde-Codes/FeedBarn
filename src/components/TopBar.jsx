import React from 'react'

const TopBar = () => {
    return (
        <div className="top-bar-area top-bar-style-one bg-dark text-light">
            <div className="container">
                <div className="row align-center">
                    <div className="col-lg-8">
                        <ul className="item-flex">
                            <li>
                                <i className="fas fa-clock"></i> Opening Hours : Sunday- Friday, 08:00 am - 05:00pm
                            </li>
                            <li>
                                <a href="tel:+4733378901"><i className="fas fa-phone-alt"></i> +4733378901</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 text-end">
                        <div className="social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar; 