import React, { Component } from 'react';

import ServicesSection from '../Services/ServicesSection';

import Background from '../../images/muscles.jpg';
import Banner from '../../images/banner-img.jpg';
import Workout from '../../images/artsy-man-working-out.jpg';
import HealthyMeal from '../../images/healthy-meal.jpg';
import TestimonialCarousel from '../Testimonials/TestimonialCarousel';
// import TestimonialPic1 from '../../images/Angie-before-after.JPG';


class Home extends Component {
    render() {
        return (
            <div className="body ">
				<section id="home" className="static img-1">
					<div className="container-fluid fadeInDown">
						<div className="row">
							<div className="center fadeInDown">
								<div className="content " >
								<iframe src="https://player.vimeo.com/video/501292614" className="d-block w-100" width="940" height="660" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
									
								</div>
								<div className="btns center">
										
										<a className="btn btn-primary btn-top" href="/register"><h4>Get Started Here!</h4></a>
									</div>
							</div>

						</div>
					</div>
				</section>
				
					<section id="adaptfit" className="static img-adapt" 
						style={{
							
								backgroundImage: `url(${Background})`,
								backgroundPosition: 'center center',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								
								
							
            			}}>
						
					
						<div className="container">
							<div className="row">
								<div className="center fadeInDown">
									<div className="content" >
									<h2><strong>Why Adaptive Fitness?</strong></h2>
									 <img src={require('../../images/Logo.png')} className="logo " alt="logo" height='250' width='250' />  
									<p className="lead"><strong>MOST FITNESS AND DIET PLANS FAIL BECAUSE THEY'RE TOO GENERIC. HOW GOOD WOULD IT FEEL TO FINALLY HAVE THE BODY YOU WANT AND NEVER STRESS ABOUT WHAT TO EAT OR HOW TO EXERCISE EVER AGAIN?....</strong> 
Unlike most coaching services, my personal coaching program is customized to fit you, your schedule, your preferences, and your level of experience. My mission is simple: To bring an effective, personalized approach to health and fitness that anyone can use to get in better shape — even if they’ve tried and failed before.</p>
									{/* <a className="btn btn-primary btn-top" href="/register"><strong>Get Started Today!</strong></a> */}
									</div>
								</div>
							</div>
						</div>
				</section>
{/* Coaching Needs */}
                <section id="feature" className="static" >
			        <div className="container">
					
			            <div className="center fadeInDown" >
			                <h2>Services</h2>
			                <p className="lead"> Appreciating the unique nature of each client is crucial to seeking the best results. However, it’s not only the methods that change from person 
							to person. Not everyone wants the same level of impact as others. While some crave a complete body transformation, others are happy to regain a little self-confidence. 
							Whatever your motives may be, Adaptive Fitness is here to support you throughout the process. </p>
			            </div> 
						<div className="row center" >
							
							
							<ServicesSection
								title="Nutrition Plans"
								desc="Custom nutrition plans designed for taking the guess work out of what to eat."
								img= {HealthyMeal}
								href= "/package2"
							/>
							
							<ServicesSection
								title="Personal Coaching"
								desc="Take the stress out of fitness and nutrition! No more worrying about what to eat, how to exercise, or what to do next."
								img={Workout}
								href= "/package3"
							/>	
						</div>
			        </div>
			    </section>

{/* Jai */}
			    <section id="jai-about" className=" static">
			        <div className="container fadeInDown">
			            <div className="center fadeInDown">
			                <h2>My Transformation</h2>
			                
							<img src={require('../../images/jai-before-after.jpeg')}  width="540"  />
							{/* <img src={require('../../images/Jai-in-park.jpg')}  width="540"  /> */}
			            </div>

			
			        </div>
			    </section>

{/* Testimonials */}
				
				<section>
					<div id="main-slider" className="static">
						<div className="container center fadeInDown">
							{/* <div className="center fadeInDown"> */}
							<TestimonialCarousel />
							{/* </div> */}
							</div>
							</div>
				</section>				
				



				{/* <section id="banner" >  */}
			    <section id="banner" className=" static"
				style={{
					backgroundImage: `url(${Banner})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}> 
			        <div className="container">
						<a href="/register" className="btn btn-primary btn-top">
							<h2>START MY TRANSFORMATION TODAY!</h2>
						</a>
					</div>

			       
			    </section>

			</div>
		
        
		)
	}
}

export default Home;
