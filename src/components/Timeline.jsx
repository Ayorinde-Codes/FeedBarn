import React from 'react';

const Timeline = () => {
  return (
    <div className="timeline-area default-padding-bottom" style={{ backgroundImage: "url(/assets/img/shape/21.png)" }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="site-heading text-center">
                        <h2 className="title">Farming History Since 1866</h2>
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <p>
                                    Our farm has a rich history that spans over a century. From its humble beginnings to becoming a leader in sustainable agriculture, our journey reflects dedication and innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="timeline-items">
                        <div className="timeline-item">
                            <h2>1906</h2>
                            <h4>Open Farm</h4>
                        </div>
                        <div className="timeline-item">
                            <h2>1920</h2>
                            <h4>Farm Remodel</h4>
                        </div>
                        <div className="timeline-item">
                            <h2>1925</h2>
                            <h4>Grain Farmers Formed</h4>
                        </div>
                        <div className="timeline-item">
                            <h2>1930</h2>
                            <h4>Start of Agriculture</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Timeline;
