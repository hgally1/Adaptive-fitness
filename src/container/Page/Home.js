import React, { Component } from 'react';
import ServicesSection from '../../components/ServicesSection';

class Home extends Component {
    render() {
        return (
            <div className="body homepage">

			    <div id="main-slider" className="no-margin">
			        <div className="carousel slide">
			            
			            <div className="carousel-inner">

			                <div className="item active slider-img-1">
			                    <div className="container">
			                        <div className="row">
			                            <div className="col-md-7">
			                                <div className="carousel-content">
			                                    <h1 className="animation animated-item-1">Personal Fitness & Nutrition Coaching</h1>
			                                    
			                                    <a className="btn-slide animation animated-item-3" href="#">Learn More</a>
			                                    <a className="btn-slide white animation animated-item-3" href="#">Get Started</a>
			                                </div>
			                            </div>

			                        </div>
			                    </div>
			                </div>

			               
			        </div>

			        
			    </div>
{/* Coaching Needs */}
                <section id="services" className="service-item">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Our Service</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>

			         	<div className="row">
			            	<ServicesSection
			                	title= "Fitness"
                                desc= "Personal Physical Training"
                                img= "https://unsplash.com/photos/w6BHqa8ukc0"
			                />
			                <ServicesSection
			                	title="Nutrition"
			                	desc= "Personalized and adaptive nutrition coaching"
	                            img= "https://unsplash.com/photos/v77vc1iAK18"
			                />
			                <ServicesSection
			                	title="Fitness & Nutrition"
			                	desc="Personalized and adaptive fitness & nutrition coaching"
			                	img="https://unsplash.com/photos/v77vc1iAK18"
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
			            <div className="center fadeInDown">
			                <h2>SIGN UP NOW</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>

			        </div>
			    </section>

			</div>
        </div>
		);
	}
}

export default Home
