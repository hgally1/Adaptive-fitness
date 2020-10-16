import React, { Component } from 'react';
import ServicesSection from '../../components/ServicesSection';

class Home extends Component {
    render() {
        return (
            <div className="body homepage">
				<div id="main" className="img-1">
					<div className="container">
						<div className="row">
							<div className="">
								<div className="content" >
									<h1 className="home-title">Adaptive Fitness</h1>
									<p className="home-title">
										Personalized Fitness and Nutrition Coaching
									</p>
									<div className="btns">
										<a className="btn btn-primary btn-top" href="#">Learn More</a>
										<a className="btn btn-primary btn-top" href="#">Get Started</a>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
{/* small section on what adaptive fitness is about */}
				<section id="adaptfit" >
					<div className="container">
						<div className="center fadeInDown">
							<div className="home-info">
								<h2>Why Adaptive Fitness?</h2>
								------------------------                  <img src={require('../../images/AF_logo.png')} className="logo" height='250' width='250' />               ------------------------
								<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
							</div>
						</div>
					</div>
				</section>

{/* Coaching Needs */}
                <section id="feature" className="service-item">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>CHOOSE YOUR COACHING NEEDS</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>

						{/* <div className="col-md-3"> */}
			         	 <div className="row">
						 
			            	<ServicesSection
			                	title= "Fitness"
                                desc= "Personal Physical Training"
								img= "https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=alora-griffiths-zEAX0E0KJxs-unsplash.jpg"
			                />
							
							
			                <ServicesSection
			                	title="Nutrition"
			                	desc= "Personalized and adaptive nutrition coaching"
	                            img= "https://images.unsplash.com/photo-1587678711204-ca6d3d2f1f3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=alex-motoc-v77vc1iAK18-unsplash.jpg&w=640"
			                />
							
			                <ServicesSection
			                	title="Fitness & Nutrition"
			                	desc="Personalized and adaptive fitness & nutrition coaching"
			                	img="https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=derick-mckinney-__QqvTI5Edc-unsplash.jpg"
			               
							/>

						 </div>
			            
						<div className="btns">
								<a className="btn btn-primary btn-top" href="#">Learn More</a>
								<a className="btn btn-primary btn-top" href="#">Learn More</a>
								<a className="btn btn-primary btn-top" href="#">Learn More</a>
						</div>
						{/* </div> */}

			        </div>
			    </section>

{/* Testimonials */}
				<section id="testimonials" >
					<div className="container">
						<div className="center fadeInDown">
							<h2>Here's what people are saying!</h2>
						</div>
						<div id="main-slider" className="no-margin">
							<div className="carousel slide">
								<ol className="carousel-indicators">
									<li data-target="#main-slider" data-slide-to="0" className="active"></li>
									<li data-target="#main-slider" data-slide-to="1"></li>
								</ol>
								<div className="carousel-inner">

									<div className="item active slider-img-1">
										<div className="container">
											<div className="row">
												<div className="col-md-7">
													<div className="carousel-content">
													
													</div>
												</div>

											</div>
									
										</div>
									</div>

									<div className="item slider-img-2">
										<div className="container">
											<div className="row">
												<div className="col-md-7">
													<div className="carousel-content">
													
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<a className="prev hidden-xs hidden-sm" href="#main-slider" data-slide="prev">
								<i className="fa fa-chevron-left"></i>
							</a>
							<a className="next hidden-xs hidden-sm" href="#main-slider" data-slide="next">
								<i className="fa fa-chevron-right"></i>
							</a>
						</div>
					</div>
			    </section>				
				
{/* Meet Jai */}
			    <section className="about" id="services" >
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Meet Jai</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  et dolore magna aliqua. Ut enim ad minim veniam
			                </p>
			            </div>
						<div className="jai-image" >
							<img src="" alt="jai-homepage-img" />
						</div>
						<div className="clearfix text-center">
			                <a href="#" className="btn btn-primary btn-top">Read More</a>
			            </div>

			            
			        </div>
			    </section>
{/* Instagram */}
			    <section id="recent-works">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Instagram</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>

			            <div className="row">
			                
			            </div>

			            <div className="clearfix text-center">
			                <a href="#" className="btn btn-primary btn-top">Show More</a>
			            </div>
			        </div>
			    </section>


			    <section id="partner">
			        <div className="container">
			            <div className="center">
							<a href="#" className="btn btn-primary btn-top">
			                	<h2>SIGN UP NOW</h2>
							</a>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>

			        </div>
			    </section>

			</div>
		
        
		)
	}
}

export default Home
