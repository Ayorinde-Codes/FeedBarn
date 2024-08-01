import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyServices = () => {
  const [activeTab, setActiveTab] = useState('Agricultural Products');

  const handleTabClick = (event, tabName) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Agricultural Products':
        return (
          <div>
            <h2>Agricultural Products</h2>
            <p>Description for Agricultural Products...</p>
            <ul className="feature-list-item">
              <li>Agriculture Consulting</li>
              <li>Custom farming rules</li>
              <li>Real-time rate shopping</li>
              <li>100 freight shipments / month</li>
            </ul>
          </div>
        );
      case 'Organic Products':
        return (
          <div>
            <h2>Organic Products</h2>
            <p>Description for Organic Products...</p>
            <ul className="feature-list-item">
              <li>Certified Organic</li>
              <li>No GMOs</li>
              <li>High Nutritional Value</li>
              <li>Eco-friendly</li>
            </ul>
          </div>
        );
      case 'Dairy Production':
        return (
          <div>
            <h2>Dairy Production</h2>
            <p>Description for Dairy Production...</p>
            <ul className="feature-list-item">
              <li>Milk Collection</li>
              <li>Cheese Making</li>
              <li>Butter Production</li>
              <li>Yogurt Processing</li>
            </ul>
          </div>
        );
      case 'Sweet Exotic Fruits':
        return (
          <div>
            <h2>Sweet Exotic Fruits</h2>
            <p>Description for Sweet Exotic Fruits...</p>
            <ul className="feature-list-item">
              <li>Mangoes</li>
              <li>Pineapples</li>
              <li>Dragon Fruits</li>
              <li>Passion Fruits</li>
            </ul>
          </div>
        );
      case 'Fresh Vegetables':
        return (
          <div>
            <h2>Fresh Vegetables</h2>
            <p>Description for Fresh Vegetables...</p>
            <ul className="feature-list-item">
              <li>Carrots</li>
              <li>Broccoli</li>
              <li>Spinach</li>
              <li>Tomatoes</li>
            </ul>
          </div>
        );
      default:
        return <div>Select a tab to view content.</div>;
    }
  };

  return (
    <div className="services-details-area default-padding">
      <div className="container">
        <div className="services-details-items">
          <div className="row">
            <div className="col-xl-8 col-lg-7 pl-45 pl-md-15 pl-xs-15 services-single-content order-lg-last">
              <div className="thumb">
                <img src="/assets/img/banner/9.jpg" alt="Thumb" />
              </div>
              {renderTabContent()}
              <div className="common-faq mt-40">
                <h2 className="mb-25">Here to help you</h2>
                <div className="accordion accordion-style-two-items" id="faqAccordion">
                  <div className="accordion-style-two">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What do you add to the soil before you plant?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        <p>
                          Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-style-two">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Do you use herbicides?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        <p>
                          Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-style-two">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Where does the water come on your crops?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        <p>
                          Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5 mt-md-100 mt-xs-50 services-sidebar">
              <div className="single-widget services-list-widget">
                <div className="content">
                  <ul>
                    <li className={activeTab === 'Agricultural Products' ? 'current-item' : ''}>
                      <a href="#" onClick={(e) => handleTabClick(e, 'Agricultural Products')}>Agricultural Products</a>
                    </li>
                    <li className={activeTab === 'Organic Products' ? 'current-item' : ''}>
                      <a href="#" onClick={(e) => handleTabClick(e, 'Organic Products')}>Organic Products</a>
                    </li>
                    <li className={activeTab === 'Dairy Production' ? 'current-item' : ''}>
                      <a href="#" onClick={(e) => handleTabClick(e, 'Dairy Production')}>Dairy Production</a>
                    </li>
                    <li className={activeTab === 'Sweet Exotic Fruits' ? 'current-item' : ''}>
                      <a href="#" onClick={(e) => handleTabClick(e, 'Sweet Exotic Fruits')}>Sweet Exotic Fruits</a>
                    </li>
                    <li className={activeTab === 'Fresh Vegetables' ? 'current-item' : ''}>
                      <a href="#" onClick={(e) => handleTabClick(e, 'Fresh Vegetables')}>Fresh Vegetables</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="single-widget quick-contact-widget text-light" style={{ backgroundImage: "url(/assets/img/banner/15.jpg)" }}>
                <div className="content">
                  <h3>Need Help?</h3>
                  <p>
                    Speak with a human to filling out a form? call corporate office and we will connect you with a team member help.
                  </p>
                  <h2>+(012) 6679545</h2>
                  <h4><a href="mailto:info@agrika.com">info@agrika.com</a></h4>
                  <Link className="btn mt-30 circle btn-theme animation btn-md" to={'/contactus'} >Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
