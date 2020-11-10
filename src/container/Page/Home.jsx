import React, { Component } from 'react';
import ServicesSection from '../../components/ServicesSection';
//import Testimonials from '../../components/Testimonials';

class Home extends Component {
    render() {
        return (
            <div className="body wrapper">
				<div id="main" className="section parallax img-1">
					<div className="container fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
						<div className="row">
							<div className="center fadeInDown">
								<div className="content" >
									<h1 className="home-title">Online Fitness and Nutrition Coaching</h1>
									<p className="home-title">
										Helping real people, like you, get real results
									</p>
									<div className="btns">
										<a className="btn btn-primary btn-top" href="/services">Learn More</a>
										<a className="btn btn-primary btn-top" href="/signup">Get Started</a>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

{/* Coaching Needs */}
                <section id="feature" className="section static service-item">
			        <div className="container">
			            <div className="center fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
			                <h2>CHOOSE YOUR COACHING NEEDS</h2>
			                <p className="lead"> Appreciating the unique nature of each client is crucial to seeking the best results. However, it’s not only the methods that change from person to person. Not everyone wants the same level of impact as others. While some crave a complete body transformation, others are happy to regain a little self-confidence. Whatever your motives may be, Adaptive Fitness is here to support you throughout the process through a selection of packages.</p>
			            </div>

			         	 	<div className="row">
						 
								<ServicesSection
									title= "Fitness"
									desc= "You'll receive personalized fitness training guides to get you to where you want to be. Whether that's losing weight, toning up, or building muscle."
									img= "https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=alora-griffiths-zEAX0E0KJxs-unsplash.jpg"
								/>
								
								
								<ServicesSection
									title="Nutrition"
									desc= " I won't deprive you of the stuff you love. Instead of crazy-strict dieting rules, we'll work together to create a simple plan that gets great results—without making you the “weird person” at dinner."
									img= "https://images.unsplash.com/photo-1587678711204-ca6d3d2f1f3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=alex-motoc-v77vc1iAK18-unsplash.jpg&w=640"
								/>
								
								<ServicesSection
									title="Fitness & Nutrition"
									desc="Take the stress out of fitness and nutrition! No more worrying about what to eat, how to exercise, or what to do next. Your only job is to show up and follow the plan"
									img="https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=derick-mckinney-__QqvTI5Edc-unsplash.jpg"
							
								/>

								<ServicesSection
									title="Physical Training"
									desc="Personalized and adaptive fitness & nutrition coaching"
									img="https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=derick-mckinney-__QqvTI5Edc-unsplash.jpg"
							
								/>

								
						 	</div>
							
						
						
						

			        </div>
			    </section>

{/* small section on what adaptive fitness is about */}
				
					<div id="adaptfit" className="section parallax img-whyus">
						{/* <img src={require('../../images/backgroundMuscles.jpg')} /> */}
					
						<div className="container fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
							<div className="row">
								<div className="center fadeInDown">
									<div className="content" >
									<h2>Why Adaptive Fitness?</h2>
									------------------------                  <img src={require('../../images/Logo.png')} className="logo" height='250' width='250' />               ------------------------
									<p className="lead">MOST FITNESS AND DIET PLANS FAIL BECAUSE THEY'RE TOO GENERIC. HOW GOOD WOULD IT FEEL TO FINALLY HAVE THE BODY YOU WANT AND NEVER STRESS ABOUT WHAT TO EAT OR HOW TO EXERCISE EVER AGAIN?.... 
Unlike most coaching services, my fitness and nutrition programs are customized to your schedule, your preferences, and your level of experience. My mission is simple: To bring an effective, personalized approach to health and fitness that anyone can use to get in better shape — even if they’ve tried and failed before.</p>
									</div>
								</div>
							</div>
						</div>
				</div>

{/* Testimonials */}
				
				<section id="testimonials" className="section static">
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
				
{/* Meet Jai
			    <section id="about" >
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Meet Jai</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  et dolore magna aliqua. Ut enim ad minim veniam
			                </p>
			            </div>
						<div className="jai-image" >
							<img src={require("../../images/Jai-smiling.jpg")} alt="jai-homepage-img" />
						</div>
						<div className="clearfix text-center">
			                <a href="/about" className="btn btn-primary btn-top">Read More</a>
			            </div>

			            
			        </div>
			    </section> */}
{/* Instagram */}
			    <section id="recent-works" className="section static ig">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Instagram</h2>
			                <p className="lead">#adaptivefitness</p>
			            </div>

			            <div className="row">
			                
			            </div>

			            <div className="clearfix text-center">
			                <a href="#" className="btn btn-primary btn-top">Show More</a>
			            </div>
			        </div>
			    </section>


			    <section id="banner" className="section parallax banner">
			        <div className="container">
			            <div className="center">
							<a href="/signup" className="btn btn-primary btn-top">
			                	<h2>START MY TRANSFORMATION TODAY!</h2>
							</a>
			            
			            </div>

			        </div>
			    </section>

			</div>
		
        
		)
	}
}

export default Home
