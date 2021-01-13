import React from 'react';
// import ArtsyGirl from '../../../images/artsy-girl-workout.jpg';
import Banner from '../../../images/banner-img.jpg';

const Package3 = () => (
            <div className="body">
				<section >	
				<div id="packages" className="packages" >
			        <div className="container fadeInDown">
			            <div className="center fadeInDown">
							<h1><u>Personal Coaching</u></h1> 
			                <p className="lead">Transforming your body comes from having a strategic plan, designed individually for your body and your lifestyle. After that, it’s consistency and commitment that creates the results you’re searching for. Most of the time, people make it out to be more complicated than it needs to be…
							This is exactly where I come in to provide the solution for your personal breakthrough. I create a completely individualized plan in a simplified way so you can actually stick to it long-term (both fitness and nutrition).</p>
							<img src={require('../../../images/fat-to-fit.jpg')}  alt="workout" width='750' />

						{/* <div className="row center">
							<h1><strong>$200</strong></h1>
						</div> */}
						
						<div className="row center">
							<ul class="list-unstyled">
								<li><h3>One-on-one coaching!</h3></li>
								<li><h3>Regular phone, or Zoom, calls with Jai!</h3></li>
								<li><h3>Personalized fitness and nutrition coaching!</h3></li>
								<li><h3>Easy to use app!</h3></li>
								<li><h3>Workout & Cardio guides!</h3></li>
							</ul>
							<a className="btn btn-primary btn-top" href="/register"><h3><u>Get started now!</u></h3></a>
						</div>
						</div>
					</div>
					{/* <div className="container-fluid" style={{
					backgroundImage: `url(${Banner})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}>
							<div className="card-group ">
								<div className="card">
							
									<div className="card-body center">
									<h2 className="card-title">Set up your free 10 minute consult now! </h2>
										
										<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
									</div>
								</div>
								
							</div>
						</div> */}
						
					
				</div>
				</section>
            </div>
        );
  

export default Package3;