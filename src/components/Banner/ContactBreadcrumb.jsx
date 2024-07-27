import React from "react";

const ContactBreadcrumb = () => {
    return (
        <div class="breadcrumb-area text-center shadow dark-hard bg-cover text-light" style="background-image: url(/assets/img/banner/15.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <h1>Contact Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
                                <li class="active">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBreadcrumb;