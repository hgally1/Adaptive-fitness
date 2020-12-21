import React, { Component } from 'react';
import ServicesSection from './ServicesSection';


class Services extends Component {
    render() {
        return (
            

			    <section id="features" className="service-item">
			        <div className="container">
			            <div className="center fadeInDown">
							<h1>Services</h1> 
			                <p className="lead">Appreciating the unique nature of each client is crucial to seeking the best results. However, it’s not only the methods that change from person to person. Not everyone wants the same level of impact as others. While some crave a complete body transformation, others are happy to regain a little self-confidence. Whatever your motives may be, Adaptive Fitness is here to support you throughout the process through a selection of packages.</p>
			            </div> 

			            <div className="row center">
							
								<ServicesSection
									title= "Workout Plans"
									desc= "Fitness training guides to help get you to where you want to be. Whether that's losing weight, toning up, or building muscle."
									img= "https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=alora-griffiths-zEAX0E0KJxs-unsplash.jpg"
									href= "/package1"
								/>
								
								<ServicesSection
									title="Nutrition Plans"
									desc= "Nutrition guides, based on weight and sex, designed for taking the guess work out of what to eat."
									img= "https://images.unsplash.com/photo-1587678711204-ca6d3d2f1f3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=alex-motoc-v77vc1iAK18-unsplash.jpg&w=640"
									href= "/package2"
								/>
								
								<ServicesSection
									title="Personal Coaching Plan"
									desc="Take the stress out of fitness and nutrition! No more worrying about what to eat, how to exercise, or what to do next. Your only job is to show up and follow the plan"
									img="https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=derick-mckinney-__QqvTI5Edc-unsplash.jpg"
									href= "/package3"
								/>
			            </div>

                    </div>
			    </section>

			   
			
		)
	}
}

export default Services
