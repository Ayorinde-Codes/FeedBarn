import React from 'react'

const CallToAction = () => {
    return (
        <div class="call-to-action-area overflow-hidden default-padding-top bg-gray" style="background-image: url(/assets/img/shape/24.png);">
            <div class="shape">
                <img src="assets/img/illustration/13.png" alt="Image Not Found" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-12">
                        <div class="callto-action text-light">
                            <h2 class="title">Built the best agriculture market</h2>
                            <p>
                                    Give lady of they such they sure it. Me contained explained my education.
                                    Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an.
                                    Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff.
                                    To perpetual do existence northward as difficult.
                            </p>
                            <a href="#">Discover More</a>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-12">
                        <div class="brand">
                            <div class="brand-style-one-carousel swiper">
                                {/* <!-- Additional required wrapper --> */}
                                <div class="swiper-wrapper">
                                    {/* <!-- Single Item --> */}
                                    <div class="swiper-slide">
                                        <img src="assets/img/brand/1.png" alt="Thumb" />
                                    </div>
                                    {/* <!-- End Single Item -->
                                    <!-- Single Item --> */}
                                    <div class="swiper-slide">
                                        <img src="assets/img/brand/2.png" alt="Thumb" />
                                    </div>
                                    {/* <!-- End Single Item -->
                                    <!-- Single Item --> */}
                                    <div class="swiper-slide">
                                        <img src="assets/img/brand/3.png" alt="Thumb" />
                                    </div>
                                    {/* <!-- End Single Item -->
                                    <!-- Single Item --> */}
                                    <div class="swiper-slide">
                                        <img src="assets/img/brand/4.png" alt="Thumb" />
                                    </div>
                                    {/* <!-- End Single Item --> */}
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