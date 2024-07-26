import React from 'react'

 const Service = () => {
  return (
    <div class="services-style-one-area bg-gray default-padding bottom-less">
        <div class="shape-right-top" style="background-image: url(assets/img/shape/9.png);"></div>
        <div class="container">

            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="site-heading text-center">
                        <h5 class="sub-title">What we do</h5>
                        <h2 class="title">Currently we are <br /> selling organic food</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                {/* <!-- Single Item --> */}
                <div class="col-lg-4 col-md-6 service-one-single">
                    <div class="service-style-one-item">
                        <div class="thumb">
                            <img src="assets/img/illustration/2.png" alt="Image Not Found" />
                        </div>
                        <div class="info">
                            <div class="top">
                                <h4><a href="#">Agriculture <span>Products</span></a></h4>
                            </div>
                            <p>
                                Seeing rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched.
                            </p>
                        </div>
                        <a href="#" class="btn-angle"><i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                {/* <!-- End Single Item -->
                <!-- Single Item --> */}
                <div class="col-lg-4 col-md-6 service-one-single">
                    <div class="service-style-one-item">
                        <div class="thumb">
                            <img src="assets/img/illustration/3.png" alt="Image Not Found" />
                        </div>
                        <div class="info">
                            <div class="top">
                                <h4><a href="#">Fresh <span>Vegetables</span></a></h4>
                            </div>
                            <p>
                                Perming rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched.
                            </p>
                            <a href="#" class="btn-angle"><i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Item -->
                <!-- Single Item --> */}
                <div class="col-lg-4 col-md-6 service-one-single">
                    <div class="service-style-one-item">
                        <div class="thumb">
                            <img src="assets/img/illustration/4.png" alt="Image Not Found" />
                        </div>
                        <div class="info">
                            <div class="top">
                                <h4><a href="#">Dairy <span>Products</span></a></h4>
                            </div>
                            <p>
                                Seeing rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched.
                            </p>
                            <a href="#" class="btn-angle"><i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Item --> */}
            </div>
        </div>
    </div>
  )
}

export default Service