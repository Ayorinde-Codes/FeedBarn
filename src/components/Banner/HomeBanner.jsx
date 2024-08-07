import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className="banner-area navigation-circle text-light banner-style-one zoom-effect overflow-hidden">
            <div className="banner-fade">
                <div className="swiper-wrapper">
                    <div className="swiper-slide banner-style-one">
                        <div className="banner-thumb bg-cover shadow dark" style={{ backgroundImage: "url(/assets/img/banner/19.jpg)" }}></div>
                        <div className="shape">
                            <img src="/assets/img/shape/2.png" alt="Agricultural Feeds Banner 1" />
                        </div>
                        <div className="container">
                            <div className="row align-center">
                                <div className="col-xl-9">
                                    <div className="content">
                                        <div className="badge">
                                            <div className="curve-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                                    <text><textPath href="#textPath">100% Organic Feed</textPath></text>
                                                </svg>
                                                <a href="https://www.youtube.com/watch?v=ipUuoMCEbDQ" className="popup-youtube"><i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h2><strong>Premium</strong> Agriculture Feeds</h2>
                                            <p>
                                                Discover our range of premium agricultural feeds designed to enhance the growth and health of your livestock. Our feeds are made from the finest organic ingredients to ensure the best results.
                                            </p>
                                            <div className="button">
                                                <Link className="btn btn-theme btn-md radius animation" to={'/aboutus'}>Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide banner-style-one">
                        <div className="banner-thumb bg-cover shadow dark" style={{ background: "url(/assets/img/banner/4.jpg)" }}></div>
                        <div className="shape">
                            <img src="/assets/img/shape/2.png" alt="Agricultural Feeds Banner 2" />
                        </div>
                        <div className="container">
                            <div className="row align-center">
                                <div className="col-xl-9">
                                    <div className="content">
                                        <div className="badge">
                                            <div className="curve-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                                    <path id="textPath2" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                                    <text><textPath href="#textPath2">100% Natural Ingredients</textPath></text>
                                                </svg>
                                                <a href="https://www.youtube.com/watch?v=ipUuoMCEbDQ" className="popup-youtube"><i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h2><strong>High-Quality</strong> Feed Solutions</h2>
                                            <p>
                                                Our feed solutions are crafted to meet the specific needs of various livestock. With a focus on quality and nutrition, our products support the health and productivity of your animals.
                                            </p>
                                            <div className="button">
                                                <Link className="btn btn-theme btn-md radius animation" to={'/aboutus'}>Discover More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide banner-style-one">
                        <div className="banner-thumb bg-cover shadow dark" style={{ background: "url(/assets/img/banner/5.jpg)" }}></div>
                        <div className="shape">
                            <img src="/assets/img/shape/2.png" alt="Agricultural Feeds Banner 3" />
                        </div>
                        <div className="container">
                            <div className="row align-center">
                                <div className="col-xl-9">
                                    <div className="content">
                                        <div className="badge">
                                            <div className="curve-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                                    <path id="textPath3" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                                    <text><textPath href="#textPath3">Nutrient-Rich Feeds</textPath></text>
                                               </svg>
                                                <a href="https://www.youtube.com/watch?v=ipUuoMCEbDQ" className="popup-youtube"><i className="fas fa-arrow-right"></i></a>
                
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h2><strong>Essential</strong> Nutritional Feeds</h2>
                                            <p>
                                                Our essential nutritional feeds are formulated to provide balanced nutrition and support the overall health and well-being of your livestock.
                                            </p>
                                            <div className="button">
                                                <Link className="btn btn-theme btn-md radius animation" to={'/aboutus'}>Find Out More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>        
        </div>
    );
}

export default HomeBanner;
