import React from 'react';

const Benefits = () => {
  return (
    <div
      className="benifits-area default-padding-top video-bg-live bg-cover mt--50 mt-md-0 mt-xs-0"
      style={{ backgroundImage: "url(/assets/img/banner/16.jpg)" }}
    >
      <div
        className="player"
        data-property="{
          videoURL:'w9eRIGTHKJM',
          containment:'.video-bg-live',
          showControls:false,
          autoPlay:true,
          zoom:0,
          loop:true,
          mute:true,
          startAt:13,
          opacity:1,
          quality:'default'
        }"
      ></div>
      <div
        className="shape-top-center"
        style={{ backgroundImage: "url(assets/img/shape/10.png)" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7">
            <div className="benifit-items text-light">
              <div className="shape">
                <img src="assets/img/illustration/8.png" alt="Image Not Found" />
              </div>
              <h2 className="title">Distributors of Organic Produce</h2>
              <p>
                We pride ourselves on providing high-quality organic produce, ensuring that all our products are fresh and free from harmful chemicals. Our commitment to sustainable farming practices guarantees that you receive only the best.
              </p>
              <ul className="list-standard">
                <li>Modern Agriculture Equipment</li>
                <li>High-Quality Feed and Grain</li>
                <li>Fresh Fruits & Vegetables</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
