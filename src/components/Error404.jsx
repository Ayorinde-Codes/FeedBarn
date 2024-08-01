import React from 'react'
import {Link} from 'react-router-dom';

const Error404 = () => {
    return (
		<div className="error-page-area default-padding text-center bg-cover">
			<div className="shape-left" style={{ background: "url(assets/img/shape/44-left.png)" }}></div>
			<div className="shape-right" style={{ background: "url(assets/img/shape/44-right.png)" }}></div>
			<div className="container">
				<div className="error-box">
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<h1>404</h1>
							<h2>Sorry Page Was Not Found!</h2>
							<Link className="btn mt-20 btn-md btn-theme" to={'/'}>Back to home</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Error404;