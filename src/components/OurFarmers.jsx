import {React, useEffect} from 'react';

const OurFarmers = () => {
        useEffect(() => {
    }, []);
    return (
    <div className="team-style-one-area default-padding">
        <div className="container">
            <div className="row align-center">
                <div className="col-lg-4">
                    <h4 className="sub-title">Our Farmers</h4>
                    <h2 className="title">Meet our professional farm experts</h2>
                    <a className="btn btn-theme secondary mt-10 btn-md radius animation" href="about-us.html">Meet all Farmers</a>
                </div>
                <div className="col-lg-7 offset-lg-1">
                    <div className="team-style-one-carousel swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="farmer-style-one-item">
                                    <div className="thumb">
                                        <img src="/assets/img/farmers/1.jpg" alt="Not Found" />
                                        <div className="social">
                                            <i className="fas fa-share-alt"></i>
                                            <ul>
                                                <li className="facebook">
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="linkedin">
                                                    <a href="#">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <span>Farmer of tomatoes</span>
                                        <h4><a href="#">Aleesha Brown</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="farmer-style-one-item">
                                    <div className="thumb">
                                        <img src="/assets/img/farmers/2.jpg" alt="Not Found" />
                                        <div className="social">
                                            <i className="fas fa-share-alt"></i>
                                            <ul>
                                                <li className="facebook">
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="linkedin">
                                                    <a href="#">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <span>Farmer of cherry</span>
                                        <h4><a href="#">Kevin Martin</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="farmer-style-one-item">
                                    <div className="thumb">
                                        <img src="/assets/img/farmers/3.jpg" alt="Not Found" />
                                        <div className="social">
                                            <i className="fas fa-share-alt"></i>
                                            <ul>
                                                <li className="facebook">
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="linkedin">
                                                    <a href="#">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <span>Farmer of potato</span>
                                        <h4><a href="#">Sarah Albert</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default OurFarmers;