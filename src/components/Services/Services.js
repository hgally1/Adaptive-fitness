import React, { Component } from 'react';
import ServicesSection from './ServicesSection';
import Workout from '../../images/artsy-man-working-out.jpg';
import HealthyMeal from '../../images/healthy-meal.jpg';

class Services extends Component {
    render() {
        return (
            

			    <section id="features" className="service-item">
			        <div className="container">
			            <div className="center fadeInDown">
							<h1>Services</h1> 
			                <p className="lead">Appreciating the unique nature of each client is crucial to seeking the best results. However, it’s not only the methods that change from person to person. 
							Not everyone wants the same level of impact as others. While some crave a complete body transformation, others are happy to regain a little self-confidence. Whatever your motives 
							may be, Adaptive Fitness is here to support you throughout the process.
							</p>
			            </div> 

			            <div className="row center">
							
								
								<ServicesSection
									title="Nutrition Plans"
									desc= "Custom nutrition plans designed for taking the guess work out of what to eat."
									img= {HealthyMeal}
									href= "/package2"
								/>
								
								<ServicesSection
									title="Personal Coaching Plan"
									desc="Take the stress out of fitness and nutrition! No more worrying about what to eat, how to exercise, or what to do next. Your only job is to show up and follow the plan"
									img={Workout}
									href= "/package3"
								/>
			            </div>

                    </div>
			    </section>

			   
			
		)
	}
}

export default Services
