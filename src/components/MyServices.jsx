import React from 'react'

const MyServices = ()=>  {
  return (
    <div className="service-style-two-area half-bg-dark-bottom default-padding-top pb-md-120 bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="text-center mb-60 mb-md-40 mb-xs-40">
                          <h2 className="mask-text large" style={{ backgroundImage: "url(/assets/img/shape/28.jpg)" }} >Healthy life with fresh products</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="service-style-two-carousel swiper mb--30">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="service-style-two">
                                    <div className="thumb">
                                        <img src="/assets/img/services/2.jpg" alt="Image not Found" />
                                    </div>
                                    <div className="overlay">
                                        <div className="icon">
                                            <img src="/assets/img/icon/21.png" alt="Image Not Found" />
                                        </div>
                                        <div className="info">
                                            <h4><a href="#">Agriculture</a></h4>
                                            <span>Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="service-style-two">
                                    <div className="thumb">
                                        <img src="/assets/img/services/3.jpg" alt="Image not Found" />
                                    </div>
                                    <div className="overlay">
                                        <div className="icon">
                                            <img src="/assets/img/icon/22.png" alt="Image Not Found" />
                                        </div>
                                        <div className="info">
                                            <h4><a href="#">Fresh</a></h4>
                                            <span>Vegetable</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="service-style-two">
                                    <div className="thumb">
                                        <img src="/assets/img/services/4.jpg" alt="Image not Found" />
                                    </div>
                                    <div className="overlay">
                                        <div className="icon">
                                            <img src="/assets/img/icon/23.png" alt="Image Not Found" />
                                        </div>
                                        <div className="info">
                                            <h4><a href="#">Organic</a></h4>
                                            <span>Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="service-style-two">
                                    <div className="thumb">
                                        <img src="/assets/img/services/5.jpg" alt="Image not Found" />
                                    </div>
                                    <div className="overlay">
                                        <div className="icon">
                                            <img src="/assets/img/icon/24.png" alt="Image Not Found" />
                                        </div>
                                        <div className="info">
                                            <h4><a href="#">Dairy</a></h4>
                                            <span>Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyServices;