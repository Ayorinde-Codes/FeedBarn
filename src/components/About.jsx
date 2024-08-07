import React from 'react';

const About = () => {
    return (
        <div className="about-style-one-area default-padding overflow-hidden">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-6 col-lg-5">
                        <div className="about-style-one-thumb">
                            <img src="/assets/img/about/4.jpg" alt="Organic Farm" />
                            <div className="animation-shape">
                                <img src="/assets/img/illustration/1.png" alt="Illustration" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                        <div className="about-style-one-info">
                            <h2 className="title">Agriculture & Organic <br /> Product Farm</h2>
                            <p>
                                Our farm specializes in agriculture and organic produce. We provide high-quality products that are fresh and sustainable.
                            </p>
                            <div className="fun-fact-style-flex mt-35">
                                <div className="counter">
                                    <div className="timer" data-to="25" data-speed="2000">25</div>
                                    <div className="operator">M</div>
                                </div>
                                <span className="medium">Growth Tons <br /> of Harvest</span>
                            </div>
                            <ul className="top-feature">
                                <li>
                                    <div className="icon">
                                        <img src="/assets/img/icon/3.png" alt="Guaranteed Organic Product" />
                                    </div>
                                    <div className="info">
                                        <h4>100% Guaranteed Organic Product</h4>
                                        <p>
                                            Our products are certified organic and meet the highest quality standards.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src="/assets/img/icon/2.png" alt="Healthy Foods Production" />
                                    </div>
                                    <div className="info">
                                        <h4>Top-Quality Healthy Foods Production</h4>
                                        <p>
                                            We use state-of-the-art methods to ensure the production of healthy and high-quality foods.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
