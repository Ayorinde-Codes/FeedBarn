import React from "react";

const ErrorBreadcrumb = () => {
    return (
        <div className="breadcrumb-area text-center shadow dark-hard bg-cover text-light" style={{ backgroundImage: "url(assets/img/banner/15.jpg)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1>Error Page</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li><a href="index.html"><i className="fas fa-home"></i> Home</a></li>
                                <li className="active">404</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorBreadcrumb;