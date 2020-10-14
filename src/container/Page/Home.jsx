import React, { Component } from 'react';
import ServicesSection from '../../components/ServicesSection';

class Home extends Component {
    render() {
        return (
            <div className="body homepage">
				<div id="main" className="img-1">
					<div className="container">
						<div className="row">
							<div className="col-md-7">
								<div className="content">
									<h1 className="">Adaptive Fitness</h1>
									<div className="">
										Fitness and Nutrition Coaching
									</div>
									<a className="btn" href="#">Learn More</a>
									<a className="btn" href="#">Get Started</a>
								</div>
							</div>

						</div>
					</div>
				</div>

				<section id="adaptfit" >
					<div className="container">
						<h1>ADAPTIVE FITNESS</h1>
					</div>
				</section>

{/* Coaching Needs */}
                <section id="services" className="service-item">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>CHOOSE YOUR COACHING NEED</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>

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

			        </div>
			    </section>
{/* Meet Jai */}
			    <section id="feature">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Meet Jai</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  et dolore magna aliqua. Ut enim ad minim veniam
			                </p>
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
			                <h2>SIGN UP NOW</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>

			        </div>
			    </section>

			</div>
		
        
		)
	}
}

export default Home
