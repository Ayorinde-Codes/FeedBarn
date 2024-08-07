import React from 'react';

const WhyUs = () => {
  return (
    <div className="choose-us-style-two-area bg-gray overflow-hidden default-padding-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 pr-100 pr-md-15 pr-xs-15 pb-120 pb-md-60 pb-xs-60">
            <ul className="list-simple text-light">
              <li>
                <h4>Always Fresh</h4>
                <p>
                  Our agricultural feeds are sourced and produced with the highest standards, ensuring that they are always fresh and packed with essential nutrients for livestock. Whether it's grains, silage, or specialty feeds, we prioritize quality.
                </p>
              </li>
              <li>
                <h4>All Organic</h4>
                <p>
                  We believe in providing natural and organic feed options that promote the well-being of animals. Our organic feed selection is free from synthetic additives, ensuring a healthy diet for livestock.
                </p>
              </li>
              <li>
                <h4>Eco-Friendly</h4>
                <p>
                  Our commitment to sustainability extends to our production processes. We utilize eco-friendly practices in sourcing and manufacturing our feeds, minimizing our carbon footprint and promoting a healthier environment.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6">
            <div className="choose-us-style-two-content">
              <h4 className="sub-title">Why Choose Us</h4>
              <h2 className="title">Quality Feeds for Your Livestock</h2>
              <div className="choose-us-style-two-info">
                <div className="content">
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer" data-to="38" data-speed="2000">38</div>
                      <div className="operator">K</div>
                    </div>
                    <span className="medium">Trusted Customers</span>
                  </div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer" data-to="28" data-speed="2000">28</div>
                      <div className="operator">M</div>
                    </div>
                    <span className="medium">Tons of Harvested Feed</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src="assets/img/thumb/4.jpg" alt="Quality Agricultural Feeds" />
                  <a href="https://www.youtube.com/watch?v=3JigXb9KXqI" className="popup-youtube video-play-button">
                    <i className="fas fa-play"></i>
                    <div className="effect"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
