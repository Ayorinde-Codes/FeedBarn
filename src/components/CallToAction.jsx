import React from 'react'

const CallToAction = () => {
    return (
        <div className="call-to-action-area overflow-hidden default-padding-top bg-gray" style={{ backgroundImage: "url(/assets/img/shape/24.png)" }}>
            <div className="shape">
                <img src="assets/img/illustration/13.png" alt="Image Not Found" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-12">
                        <div className="callto-action text-light">
                            <h2 className="title">Built the best agriculture market</h2>
                            <p>
                                    Give lady of they such they sure it. Me contained explained my education.
                                    Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an.
                                    Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff.
                                    To perpetual do existence northward as difficult.
                            </p>
                            <a href="#">Discover More</a>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="brand">
                            <div className="brand-style-one-carousel swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src="/assets/img/brand/1.png" alt="Thumb" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/brand/2.png" alt="Thumb" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/brand/3.png" alt="Thumb" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/brand/4.png" alt="Thumb" />
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

export default CallToAction;