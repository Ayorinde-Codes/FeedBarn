import React from 'react'

const Gallery = () => {
  return (
    <div className="gallery-style-one-area default-padding">

        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="site-heading text-center">
                        <h5 className="sub-title">Awesome Gallery</h5>
                        <h2 className="title">Explore Projects</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fill">
            <div className="row">
                <div className="gallery-style-one-carousel swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="gallery-style-one">
                                <img src="/assets/img/projects/1.jpg" alt="Image not Found" />
                                <div className="overlay">
                                    <p>Fruit</p>
                                    <h4><a href="project-details.html">Healthy Food</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery-style-one">
                                <img src="/assets/img/projects/2.jpg" alt="Image not Found" />
                                <div className="overlay">
                                    <p>Organic</p>
                                    <h4><a href="project-details.html">Cow Milk</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery-style-one">
                                <img src="/assets/img/projects/3.jpg" alt="Image not Found" />
                                <div className="overlay">
                                    <p>Vegetables</p>
                                    <h4><a href="project-details.html">Organic Vegetables</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery-style-one">
                                <img src="/assets/img/projects/4.jpg" alt="Image not Found" />
                                <div className="overlay">
                                    <p>Cereals</p>
                                    <h4><a href="project-details.html">Fresh Mandrains</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery-style-one">
                                <img src="/assets/img/projects/5.jpg" alt="Image not Found" />
                                <div className="overlay">
                                    <p>Havest</p>
                                    <h4><a href="project-details.html">Crispy Cucumber</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-pagination"></div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery;
