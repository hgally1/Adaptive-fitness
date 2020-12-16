import React, { Component } from 'react';

import ServicesSection from '../Services/ServicesSection';

import Background from '../../images/muscles.jpg';
import Banner from '../../images/banner-img.jpg';
import TestimonialPic1 from '../../images/Angie-before-after.JPG';


class Home extends Component {
    render() {
        return (
            <div className="body wrapper">
				<div id="main" className="section parallax img-1">
					<div className="container fadeInDown">
						<div className="row">
							<div className="center fadeInDown">
								<div className="content fadeInDown" >
									<h1 className="home-title">Online Fitness and Nutrition Coaching</h1>
									{/* <h1 className="home-title">Adaptive Fitness</h1> */}
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

{/* small section on what adaptive fitness is about */}
				
					<section id="adaptfit" className="section static img-adapt" 
						style={{
							
								backgroundImage: `url(${Background})`,
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								
								
							
            			}}>
						
					
						<div className="container">
							<div className="row">
								<div className="center fadeInDown">
									<div className="content" >
									<h2><strong>Why Adaptive Fitness?</strong></h2>
									------------------------                  <img src={require('../../images/Logo.png')} className="logo" alt="logo" height='250' width='250' />               ------------------------
									<p className="lead"><strong>MOST FITNESS AND DIET PLANS FAIL BECAUSE THEY'RE TOO GENERIC. HOW GOOD WOULD IT FEEL TO FINALLY HAVE THE BODY YOU WANT AND NEVER STRESS ABOUT WHAT TO EAT OR HOW TO EXERCISE EVER AGAIN?....</strong> 
Unlike most coaching services, my personal coaching program is customized to fit you, your schedule, your preferences, and your level of experience. My mission is simple: To bring an effective, personalized approach to health and fitness that anyone can use to get in better shape — even if they’ve tried and failed before.</p>
									</div>
								</div>
							</div>
						</div>
				</section>
{/* Coaching Needs */}
                <section id="feature" className="section static feature " >
			        <div className="container">
					
			            <div className="center fadeInDown" >
			                <h2>CHOOSE YOUR COACHING NEEDS</h2>
			                <p className="lead"> Appreciating the unique nature of each client is crucial to seeking the best results. However, it’s not only the methods that change from person to person. Not everyone wants the same level of impact as others. While some crave a complete body transformation, others are happy to regain a little self-confidence. Whatever your motives may be, Adaptive Fitness is here to support you throughout the process through a selection of packages.</p>
			            </div> 
						
						
						
						
			         	 	<div className="row center" >
							  
							 
								<ServicesSection
									title= "Workout Plans"
									desc= "Fitness training guides to help get you to where you want to be. Whether that's losing weight, toning up, or building muscle."
									img= "https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=alora-griffiths-zEAX0E0KJxs-unsplash.jpg"
									href= "/package1"
								/>
								
								<ServicesSection
									title="Nutrition Plans"
									desc="Nutrition plans, based on weight and sex, designed for taking the guess work out of what to eat."
									img= "https://images.unsplash.com/photo-1587678711204-ca6d3d2f1f3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=alex-motoc-v77vc1iAK18-unsplash.jpg&w=640"
									href= "/package2"
								/>
								
								<ServicesSection
									title="Personal Coaching"
									desc="Take the stress out of fitness and nutrition! No more worrying about what to eat, how to exercise, or what to do next."
									img="https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=derick-mckinney-__QqvTI5Edc-unsplash.jpg"
									href= "/package3"
								/>
								

								
						 	</div>
						
						
						
						

			        </div>
			    </section>



{/* Testimonials */}
				
				<section id="testimonials" className="section static testimonials">
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

			 						<div className="item active slider-img " style={{
										backgroundImage: `url(${TestimonialPic1})`,
										// backgroundPosition: 'left',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '50%',
										
									}}> 
									
										<div className="container">
											<div className="row">
												<div className="col-md-8">
													<div className="carousel-content">
													<h3>Angie</h3>
													
														<h3>Before</h3>
														<li>Age: </li>
														<li>Weight: </li>
														{/* <li>Pant Size: </li>
														<li>Shirt Size: </li> */}
													
													
														<h3>After</h3>
														<li>Age: </li>
														<li>Weight: </li>
														{/* <li>Pant Size: </li>
														<li>Shirt Size: </li> */}
													
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
				

{/* Instagram */}
			    <section id="recent-works" className="section static ig">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>CONNECT WITH ME</h2>
			                <p className="lead">#adaptivefitness</p>
							<p>______________________________________</p>
							
							<a className="fa fa-instagram"  rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/adaptivefitt/"></a>
								
							
							
			            </div>

			
			        </div>
			    </section>

				{/* <section id="banner" >  */}
			    <section id="banner" className="section static banner"
				style={{
					backgroundImage: `url(${Banner})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}> 
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

export default Home;
