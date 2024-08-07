import React from 'react'
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div className="call-to-action-area overflow-hidden default-padding-top bg-gray" style={{ backgroundImage: "url(/assets/img/shape/24.png)" }}>
            <div className="shape">
                <img src="assets/img/illustration/13.png" alt="Not Found" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-12">
                        <div className="callto-action text-light">
                            <h2 className="title">Join Us in Revolutionizing Agriculture</h2>
                            <p>
                                Discover a wide range of organic and sustainable agricultural products. From fresh fruits and vegetables to premium dairy and cereals, we are committed to providing the best quality produce. Our journey is driven by a passion for farming and a dedication to delivering fresh, healthy products to our customers.
                            </p>
                            <Link to={'/aboutus'}>Discover More</Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="brand">
                            <div className="brand-style-one-carousel swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src="/assets/img/brand/1.png" alt="Brand Logo 1" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/brand/2.png" alt="Brand Logo 2" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/brand/3.png" alt="Brand Logo 3" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/brand/4.png" alt="Brand Logo 4" />
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

export default CallToAction;
