import React from 'react'

const Timeline = () => {
  return (
    <div class="service-style-two-area half-bg-dark-bottom default-padding-top pb-md-120 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="text-center mb-60 mb-md-40 mb-xs-40">
                        <h2 class="mask-text large" style="background-image: url(assets/img/shape/28.jpg);">Healthy life with fresh products</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="service-style-two-carousel swiper mb--30">
                        {/* <!-- Additional required wrapper --> */}
                        <div class="swiper-wrapper">

                            {/* <!-- Single Item --> */}
                            <div class="swiper-slide">
                                <div class="service-style-two">
                                    <div class="thumb">
                                        <img src="assets/img/800x800.png" alt="Image not Found" />
                                    </div>
                                    <div class="overlay">
                                        <div class="icon">
                                            <img src="assets/img/icon/21.png" alt="Image Not Found" />
                                        </div>
                                        <div class="info">
                                            <h4><a href="#">Agriculture</a></h4>
                                            <span>Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                            <div class="swiper-slide">
                                <div class="service-style-two">
                                    <div class="thumb">
                                        <img src="assets/img/800x800.png" alt="Image not Found" />
                                    </div>
                                    <div class="overlay">
                                        <div class="icon">
                                            <img src="assets/img/icon/22.png" alt="Image Not Found" />
                                        </div>
                                        <div class="info">
                                            <h4><a href="#">Fresh</a></h4>
                                            <span>Vegetable</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                            <div class="swiper-slide">
                                <div class="service-style-two">
                                    <div class="thumb">
                                        <img src="assets/img/800x800.png" alt="Image not Found" />
                                    </div>
                                    <div class="overlay">
                                        <div class="icon">
                                            <img src="assets/img/icon/23.png" alt="Image Not Found" />
                                        </div>
                                        <div class="info">
                                            <h4><a href="#">Organic</a></h4>
                                            <span>Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                            <div class="swiper-slide">
                                <div class="service-style-two">
                                    <div class="thumb">
                                        <img src="assets/img/800x800.png" alt="Image not Found" />
                                    </div>
                                    <div class="overlay">
                                        <div class="icon">
                                            <img src="assets/img/icon/24.png" alt="Image Not Found" />
                                        </div>
                                        <div class="info">
                                            <h4><a href="#">Dairy</a></h4>
                                            <span>Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}

                        </div>

                        {/* <!-- Navigation --> */}
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline;
