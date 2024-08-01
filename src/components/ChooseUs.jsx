import React from 'react';

const ChooseUs = () => {
    return (
        <div className="choose-us-style-three-area default-padding bg-dark text-light">
            <div className="illustration-bottom">
                <img src="assets/img/illustration/17.png" alt="Image Not Found" />
            </div>
            <div className="shape" style={{ backgroundImage: "url(/assets/img/about/3.jpg)" }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6 pl-60 pl-md-15 pl-xs-15">
                        <h2 className="title">Healthy life with <br /> fresh products</h2>
                        <p>
                            Consume ipsum dolor sit amet consectetur adipisicing elit.
                            Veritatis, illo ullam harum et fuga suscipit quibusdam sapiente.
                            Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.
                        </p>
                        <div className="list-grid">
                            
                            <div className="achivement-content">
                                <div className="item">
                                    <div className="progressbar">
                                        <div className="circle" data-percent="87">
                                            <strong></strong>
                                        </div>
                                    </div>
                                    <h4>Organic Solutions</h4>
                                </div>
                            </div>
                            <ul className="list-item">
                                <li>Biodynamic food</li>
                                <li>Organic gardening</li>
                                <li>Organic food certification</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default ChooseUs;