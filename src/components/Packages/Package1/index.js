import React from 'react';
// import Workout from '../../../images/artsy-man-working-out.jpg';

const Package1 = () => (
            <div className="body">

			    <section id="packages" className="packages" >
				
			        <div className="container">
			            <div className="center fadeInDown">
				
							
							<h1><u>Workout Plans</u></h1> 
							<p className="lead">Fitness training guides to help get you to where you want to be. Whether that's losing weight, toning up, or building muscle.</p>
							
							<img src={require('../../../images/artsy-man-working-out.jpg')}  alt="workout" height='650' width='750' />
						 

						<div className="row center">
							<h1><strong>$30</strong></h1>
						</div>
								
						<div className="row center">
							<ul className="list-unstyled">
								<li>Do on your own!</li>
								<li>Cost Effecient!</li>
								<li>Choose from pre-made generic workout programs</li>
							</ul>
						</div>
						</div>
					
						<div className="card-group">
							<div className="card col-md-3 col-sm-5">
								<img src="..." className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">Men's Beginner</h5>
									<p className="card-text">4 day beginner fitness program</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							<div className="card col-md-3 col-sm-5">
								<img src="..." className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">Men's Intermediate</h5>
									<p className="card-text">6 day intermediate fitness program</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							<div className="card col-md-3 col-sm-5">
								<img src="..." className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">Women's Beginner</h5>
									<p className="card-text">4 day fitness program</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							<div className="card col-md-3 col-sm-5">
								<img src="..." className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">Women's Intermediate</h5>
									<p className="card-text">6 day fitness program</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							
						</div>
						<div className="card-group">
							
							<div className="card col-md-3 col-sm-5">
								<img src="..." className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">Cardio</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							<div className="card col-md-3 col-sm-5">
								<img src="..." className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">High Intensity Interval Training</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							<div className="card col-md-3 col-sm-5">
								<img src="..." className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							<div className="card col-md-3 col-sm-5">
								<img src="..." className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
								</div>
							</div>
							
						</div>
					</div>		
			            
                </section> 
            </div>
        );

export default Package1;