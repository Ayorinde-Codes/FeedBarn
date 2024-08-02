import React from 'react'

export default function Banner() {
  return (
        <div className="banner-area navigation-circle text-light banner-style-three zoom-effect overflow-hidden">
            <div className="banner-fade">
                <div className="swiper-wrapper">
                    <div className="swiper-slide banner-style-three">
                        <div className="banner-thumb bg-cover shadow dark"  style={{ background: "url(/assets/img/banner/3.jpg)" }}></div>
                        <div className="container">
                            <div className="row align-center">
                                <div className="col-lg-8 offset-lg-4">
                                    <div className="content">
                                        <h4>Best Agro Company</h4>
                                        <h2><strong>Organic agriculture</strong> farming products</h2>
                                        <div className="button">
                                            <a className="btn btn-theme btn-md radius animation" href="about-us.html">Discover More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide banner-style-three">
                        <div className="banner-thumb bg-cover shadow dark"  style={{ background: "url(/assets/img/banner/3.jpg)" }}></div>
                        <div className="container">
                            <div className="row align-center">
                                <div className="col-lg-8 offset-lg-4">
                                    <div className="content">
                                        <h4>Natural Farming Company</h4>
                                        <h2><strong>Agriculture matter</strong> good production</h2>
                                        <div className="button">
                                            <a className="btn btn-theme btn-md radius animation" href="about-us.html">Discover More</a>
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
  )
}
