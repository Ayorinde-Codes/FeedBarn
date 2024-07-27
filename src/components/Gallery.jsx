import React from 'react'

const Gallery = () => {
  return (
    <div class="gallery-style-one-area default-padding">

        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="site-heading text-center">
                        <h5 class="sub-title">Awesome Gallery</h5>
                        <h2 class="title">Explore Projects</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fill">
            <div class="row">
                <div class="gallery-style-one-carousel swiper">
                    {/* <!-- Additional required wrapper --> */}
                    <div class="swiper-wrapper">

                        {/* <!-- Single Item --> */}
                        <div class="swiper-slide">
                            <div class="gallery-style-one">
                                <img src="assets/img/800x800.png" alt="Image not Found" />
                                <div class="overlay">
                                    <p>Fruit</p>
                                    <h4><a href="project-details.html">Healthy Food</a></h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Item -->
                        <!-- Single Item --> */}
                        <div class="swiper-slide">
                            <div class="gallery-style-one">
                                <img src="assets/img/800x800.png" alt="Image not Found" />
                                <div class="overlay">
                                    <p>Organic</p>
                                    <h4><a href="project-details.html">Cow Milk</a></h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Item -->
                        <!-- Single Item --> */}
                        <div class="swiper-slide">
                            <div class="gallery-style-one">
                                <img src="assets/img/800x800.png" alt="Image not Found" />
                                <div class="overlay">
                                    <p>Vegetables</p>
                                    <h4><a href="project-details.html">Organic Vegetables</a></h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Item -->
                        <!-- Single Item --> */}
                        <div class="swiper-slide">
                            <div class="gallery-style-one">
                                <img src="assets/img/800x800.png" alt="Image not Found" />
                                <div class="overlay">
                                    <p>Cereals</p>
                                    <h4><a href="project-details.html">Fresh Mandrains</a></h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Item -->
                        <!-- Single Item --> */}
                        <div class="swiper-slide">
                            <div class="gallery-style-one">
                                <img src="assets/img/800x800.png" alt="Image not Found" />
                                <div class="overlay">
                                    <p>Havest</p>
                                    <h4><a href="project-details.html">Crispy Cucumber</a></h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Item --> */}

                    </div>

                    {/* <!-- Pagination --> */}
                    <div class="swiper-pagination"></div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery;
