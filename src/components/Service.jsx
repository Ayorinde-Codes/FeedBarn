import React from 'react';

const Service = () => {
  return (
    <div className="services-style-one-area bg-gray default-padding bottom-less">
      <div className="shape-right-top" style={{ backgroundImage: 'url(assets/img/shape/9.png)' }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="site-heading text-center">
              <h5 className="sub-title">What we do</h5>
              <h2 className="title">Currently we are <br /> selling organic food</h2>
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
                                    <img src="/assets/img/services/2.jpg" alt="not Found" />
                                </div>
                                <div className="overlay">
                                    <div className="icon">
                                        <img src="/assets/img/icon/21.png" alt="Not Found" />
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
                                    <img src="/assets/img/services/3.jpg" alt="not Found" />
                                </div>
                                <div className="overlay">
                                    <div className="icon">
                                        <img src="/assets/img/icon/22.png" alt="Not Found" />
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
                                    <img src="/assets/img/services/4.jpg" alt="not Found" />
                                </div>
                                <div className="overlay">
                                    <div className="icon">
                                        <img src="/assets/img/icon/23.png" alt="Not Found" />
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
                                    <img src="/assets/img/services/5.jpg" alt="not Found" />
                                </div>
                                <div className="overlay">
                                    <div className="icon">
                                        <img src="/assets/img/icon/24.png" alt="Not Found" />
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
  );
};

export default Service;
