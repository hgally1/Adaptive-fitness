import React from 'react';
// import ArtsyGirl from '../../../images/artsy-girl-workout.jpg';
import Banner from '../../../images/banner-img.jpg';

const Package2 = () => (
            <div className="body">


			    <div id="packages" className="packages" >
				
					<div className="container">
			            <div className="center fadeInDown">
							<h1><u>Nutrition Plans</u></h1> 
			                <p className="lead">"Nutrition plans, based on weight and sex, designed for taking the guess work out of what to eat."</p>
							<img src={require('../../../images/healthy-food.jpg')}  alt="workout" height='650' width='750' />

							{/* <div className="row center">
								<h1><strong>$40</strong></h1>
							</div> */}
						</div>
					</div>
						<div className="container fadeInDown">
							<div className=" center">
								<ul class="list-unstyled">
									<li><h3>Do On Your Own!</h3></li>
									<li><h3>Cost Effecient!</h3></li>
									<li><h3>Nutrition guides based on your weight, sex, & diet preference!</h3></li>
								</ul>
							</div>
						

						</div>
					
					<div className="container-fluid" >
							<div className="card-group "style={{
					backgroundImage: `url(${Banner})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}>
								<div className="card">
							
									<div className="card-body center">
										<h2 className="card-title">Set up your free 10 minute consult to decide which nutrition plan will work best for you!</h2>
										
										<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
									</div>
								</div>
								
							</div>
						</div>
					{/* <section>
						<div className="container center fadeInDown">
						<div className="card-group">
						<div className="row">
							<div className="card col-lg-3 col-md-4 col-sm-5">
								<img src={require('../../../images/fat-man-1.png')}  width="200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h2 className="card-title">Men 200-250 lbs</h2>
									<p className="card-text">Fat loss meal plan</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							<div className="card col-lg-3 col-md-4 col-sm-5">
								<img src={require('../../../images/medium-men.png')} width="200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h2 className="card-title">Men 180-199 lbs</h2>
									<p className="card-text">Fat loss meal plan</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							<div className="card col-lg-3 col-md-4 col-sm-5">
								<img src={require('../../../images/defined-men.png')} width="200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h2 className="card-title">Men 160-179 lbs</h2>
									<p className="card-text">Fat loss meal plan</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							<div className="card col-lg-3 col-md-4 col-sm-5">
								<img src={require('../../../images/fat-girls.png')} width="200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h2 className="card-title">Women 200-250 lbs</h2>
									<p className="card-text">Fat loss meal plan</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							
						{/* </div>
						<div className="card-group"> */}
							
							{/* <div className="card col-lg-3 col-md-4 col-sm-5">
								<img src={require('../../../images/medium-girls.png')} width="200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h2 className="card-title">Women 161-199 lbs</h2>
									<p className="card-text">Fat loss meal plan</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							<div className="card col-lg-3 col-md-4 col-sm-5">
								<img src={require('../../../images/fit-girls.png')} width="200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h2 className="card-title">Women 145-160 lbs</h2>
									<p className="card-text">Fat loss meal plan</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div> */}
							{/* <div className="card col-lg-3 col-md-4 col-sm-5">
								<img src={require('../../../images/fit-men.png')} width="200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h2 className="card-title">High Intensity Interval Training</h2>
									<p className="card-text">Some quick example text.</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							<div className="card col-lg-3 col-md-4 col-sm-5">
								<img src={require('../../../images/legs-jumping.jpg')} width="200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h2 className="card-title">Card title</h2>
									<p className="card-text">Some quick example text.</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							<div className="card col-lg-3 col-md-4 col-sm-5">
								<img src={require('../../../images/legs-jumping.jpg')} width="200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h2 className="card-title">Card title</h2>
									<p className="card-text">Some quick example text.</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div> */} 
							{/* </div>
						</div>
						
						</div>
						</section> */}
						
					</div>

			            
                
            </div>
        );

export default Package2