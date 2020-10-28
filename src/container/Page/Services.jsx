import React, { Component } from 'react';
import ServicesSection from '../../components/ServicesSection';

class Services extends Component {
    render() {
        return (
            <div className="body">
				<div className="page-title">
			        <h1>Services</h1> 
			    </div>

			    <section id="features" className="service-item">
			        <div className="container">
			            <div className="center fadeInDown">
			                {/* <h2>Our Service</h2> */}
			                <p className="lead">Transforming your body comes from having a strategic plan, designed individually for your body and your lifestyle. After that, it’s consistency and commitment that creates the results you’re searching for. Most of the time, people make it out to be more complicated than it needs to be…

This is exactly where we come in to provide the solution for your personal breakthrough. We create a completely individualized plan in a simplified way so you can actually stick to it long-term (both training and nutrition).</p>
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

			    <section id="partner">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Sign up</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>
			            
			        </div>
			    </section>
			</div>
		)
	}
}

export default Services
