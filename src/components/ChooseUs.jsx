import React from 'react';

const ChooseUs = () => {
    return (
        <div className="choose-us-style-three-area default-padding bg-dark text-light">
            <div className="illustration-bottom">
                <img src="/assets/img/illustration/17.png" alt="Illustration of fresh products" />
            </div>
            <div className="shape" style={{ backgroundImage: "url(/assets/img/about/3.jpg)" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6 pl-60 pl-md-15 pl-xs-15">
                        <h2 className="title">Healthy Life with <br /> Fresh Products</h2>
                        <p>
                            Discover the benefits of consuming high-quality, fresh products. Our offerings include biodynamic food, organic gardening, and food certification to ensure you get the best for a healthy life.
                        </p>
                        <div className="list-grid">
                            <div className="achivement-content">
                                <div className="item">
                                    <div className="progressbar">
                                        <div className="circle" data-percent="87">
                                            <strong></strong>
                                        </div>
                                    </div>
                                    <h4>Organic Solutions</h4>
                                </div>
                            </div>
                            <ul className="list-item">
                                <li>Biodynamic Food</li>
                                <li>Organic Gardening</li>
                                <li>Organic Food Certification</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs;
