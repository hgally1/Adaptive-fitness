import React, { Component } from 'react';
import ServicesSection from '../../components/ServicesSection';

class Services extends Component {
    render() {
        return (
            <div className="body">
				<div className="page-title">
			        <h1>Services</h1>
			    </div>

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

			    <section id="partner">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Our Partners</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>
			            
			        </div>
			    </section>
			</div>
		)
	}
}

export default Services
