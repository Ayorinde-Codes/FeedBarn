import React from "react";
import {Link} from 'react-router-dom';

const ContactBreadcrumb = () => {
    return (
        <div className="breadcrumb-area text-center shadow dark-hard bg-cover text-light" style={{ backgroundImage: "url(/assets/img/banner/15.jpg)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1>Contact Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li><Link to={'/'}><i className="fas fa-home"></i> Home</Link></li>
                                <li className="active">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBreadcrumb;