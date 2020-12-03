import React, { Component } from 'react';
// import PricingTable from '../../components/PricingTable/PricingTable';
import ServicesSection from './ServicesSection';

class Services extends Component {
    render() {
        return (
            <div className="body">

			    <section id="features" className="service-item">
			        <div className="container">
			            <div className="center fadeInDown">
							<h1>Services</h1> 
			                <p className="lead">Transforming your body comes from having a strategic plan, designed individually for your body and your lifestyle. After that, it’s consistency and commitment that creates the results you’re searching for. Most of the time, people make it out to be more complicated than it needs to be…

This is exactly where I come in to provide the solution for your personal breakthrough. I create a completely individualized plan in a simplified way so you can actually stick to it long-term (both training and nutrition).</p>
			            </div> 

			            <div className="row">
							{/* <PricingTable /> */}
							<ServicesSection
									title= "workout plan"
									desc= "Fitness training guides to help get you to where you want to be. Whether that's losing weight, toning up, or building muscle."
									img= "https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=alora-griffiths-zEAX0E0KJxs-unsplash.jpg"
									href= "/package1"
								/>
								
								<ServicesSection
									title="Nutrition"
									desc= " I won't deprive you of the stuff you love. Instead of crazy-strict dieting rules, we'll work together to create a simple plan that gets great results—without making you the “weird person” at dinner."
									img= "https://images.unsplash.com/photo-1587678711204-ca6d3d2f1f3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=alex-motoc-v77vc1iAK18-unsplash.jpg&w=640"
									href= "/package2"
								/>
								
								<ServicesSection
									title="Fitness & Nutrition"
									desc="Take the stress out of fitness and nutrition! No more worrying about what to eat, how to exercise, or what to do next. Your only job is to show up and follow the plan"
									img="https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=derick-mckinney-__QqvTI5Edc-unsplash.jpg"
									href= "/package3"
								/>
			            </div>

                    </div>
			    </section>

			    <section id="banner" className="section static banner">
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

export default Services
