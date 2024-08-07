import { React, useState } from 'react';
import axios from 'axios';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [buttonText, setButtonText] = useState('Get in Touch');

  const formSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    setStatus('');

    const data = {
      name,
      phone,
      email,
      message,
    };

    axios
      .post('https://your-backend-url/api/sendEmail', data)
      .then((response) => {
        if (response.data.status === 'success') {
          setStatus('Message sent successfully');
          resetForm();
        } else {
          setStatus('Message failed to send');
        }
        setButtonText('Get in Touch');
      })
      .catch((error) => {
        setStatus('Message failed to send');
        setButtonText('Get in Touch');
        console.error(error);
      });
  };

  const resetForm = () => {
        setName('');
        setMessage('');
        setEmail('');
        setPhone('');
  };

    return (
        <div className="contact-area contact-page overflow-hidden bg-gray default-padding">
            <div className="sahpe-right-bottom">
                <img src="/assets/img/shape/16.png" alt="Decorative shape" />
            </div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-tact-stye-one col-xl-7 col-lg-7">
                        <div className="contact-form-style-one mb-md-50">
                            <img src="/assets/img/illustration/10.png" alt="Illustration of contact form" />
                            <h5 className="sub-title">Have Questions?</h5>
                            <h2 className="heading">Send Us a Message</h2>
                            <form className="contact-form" onSubmit={formSubmit}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" id="name" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name" type="text" />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email*" type="email" />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" type="text" />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group comments">
                                            <textarea className="form-control" id="comments" name="comments" value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell Us About Your Project *"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button type="submit" name="submit" id="submit">
                                            <i className="fa fa-paper-plane"></i> {buttonText}
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12 alert-notification">
                                    <div id="message" className="alert-msg">{status}</div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-tact-stye-one col-xl-5 col-lg-5 pl-80 pl-md-15 pl-xs-15">
                        <div className="contact-style-one-info">
                            <h2>
                                Contact 
                                <span>
                                    Information
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                                        <path d="M14.4,111.6c0,0,202.9-33.7,471.2,0c0,0-194-8.9-397.3,24.7c0,0,141.9-5.9,309.2,0" style={{animationPlayState: 'running'}}></path>
                                    </svg>
                                </span>
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Aliquam eaque laborum ad asperiores dolorem. Adipisci error eaque dolorem.
                            </p>
                            <ul>
                                <li>
                                    <div className="content">
                                        <h5 className="title">Hotline</h5>
                                        <a href="tel:+234733378901">+234733378901</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="info">
                                        <h5 className="title">Our Location</h5>
                                        <p>
                                            5919 Lagos, <br /> Nigeria
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="info">
                                        <h5 className="title">Official Email</h5>
                                        <a href="mailto:info@feedbarn.com">info@feedbarn.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactForm;
