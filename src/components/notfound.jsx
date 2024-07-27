import React from 'react'

const Notfound = () => {
    return (
		<div class="error-page-area default-padding text-center bg-cover">
			{/* <!-- Shape --> */}
			<div class="shape-left" style="background: url(assets/img/shape/44-left.png);"></div>
			<div class="shape-right" style="background: url(assets/img/shape/44-right.png);"></div>
			{/* <!-- End Shape --> */}
			<div class="container">
				<div class="error-box">
					<div class="row">
						<div class="col-lg-8 offset-lg-2">
							<h1>404</h1>
							<h2>Sorry Page Was Not Found!</h2>
							<p>
								Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.
							</p>
							<a class="btn mt-20 btn-md btn-theme" href="index.html">Back to home</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Notfound;