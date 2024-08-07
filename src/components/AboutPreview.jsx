import React from 'react';

const AboutPreview = () => {
    return (
        <div>
            <div className="about-style-four-area default-padding" style={{ backgroundImage: "url(assets/img/shape/43.png)" }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="about-four-thumb">
                                <img src="/assets/img/about/5.jpg" alt="Feed Processing Facility" />
                                <img src="/assets/img/illustration/4.png" alt="Feed Ingredients" />
                                <div className="experience">
                                    <h2><strong>30</strong> Years of Expertise</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="about-four-info">
                                <h2 className="title">Quality Feeds for Optimal Growth</h2>
                                
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="mission-tab-control" data-bs-toggle="tab" data-bs-target="#mission-tab" type="button" role="tab" aria-controls="mission-tab" aria-selected="true">
                                    Our Mission
                                    </button>

                                    <button className="nav-link" id="vision-tab-control" data-bs-toggle="tab" data-bs-target="#vision-tab" type="button" role="tab" aria-controls="vision-tab" aria-selected="false">
                                        Our Vision
                                    </button>

                                </div>
                                <div className="tab-content about-tab-items" id="myTabContent">
                                    <div className="tab-pane fade show active" id="mission-tab" role="tabpanel" aria-labelledby="mission-tab-control">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p>
                                                    Our mission is to provide high-quality, nutritionally balanced feeds that support the healthy growth and productivity of livestock. We are committed to using the best ingredients and the latest technology in our feed production process.
                                                </p>
                                                <p>
                                                    With decades of experience in the agricultural industry, we focus on innovation and sustainability to meet the evolving needs of farmers and their animals. Our dedicated team ensures that every product meets the highest standards of quality and safety.
                                                </p>
                                                <div className="call-us">
                                                    <div className="icon">
                                                        <i className="fas fa-phone-alt"></i>
                                                    </div>
                                                    <div className="info">
                                                        <h4>Contact Us Today</h4>
                                                        <h3> +234733378901</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="vision-tab" role="tabpanel" aria-labelledby="vision-tab-control">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p>
                                                    Our vision is to be a leading provider of innovative feed solutions that enhance the health and productivity of livestock worldwide. We strive to be at the forefront of research and development in feed technology, continually improving our products to meet the needs of modern agriculture.
                                                </p>
                                                <p>
                                                    By fostering strong relationships with our customers and partners, we aim to contribute to the success of farmers and the overall advancement of the agricultural industry. Our goal is to create sustainable and effective solutions that support a thriving global food system.
                                                </p>
                                                <div className="call-us">
                                                    <div className="icon">
                                                        <i className="fas fa-phone-alt"></i>
                                                    </div>
                                                    <div className="info">
                                                        <h4>Get in Touch</h4>
                                                        <h3> +234733378901</h3>
                                                    </div>
                                                </div>
                                            </div>
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

export default AboutPreview;
