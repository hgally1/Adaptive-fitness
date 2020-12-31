import React from 'react';
import Banner from '../../images/banner-img.jpg';

const AboutPage = () => (
    
    <div className="body">
				
				
				    
					<div className="about">
						<div className="container">
			            	<div className="center fadeInDown mb-2" data-wow-duration="1000ms" data-wow-delay="600ms">
							<div className="card mb-3 ">
								<div className="about-image">
								<img src={require('../../images/Jai-smiling.jpg')} className="card-img" alt="Jai-smiling" width='1160'/>
								</div>
							</div>
							</div>
							<div className="card mb-3">
								<div className="row">
									<div className="col-md-4">
										<div className="">
											<img src={require('../../images/Jai-kneel.JPG')} className="card-img" alt="Jai-kneeling" width='260'/>
										</div>
									</div>
									<div className="col-md-7">
										<div className="about-content">
											<div className="card-body">
												<h2 className="card-title">Hi, I'm Jai!</h2>
												<p className="card-text"> Fitness has always been a part of my life and has had tremendous power in creating the foundations for my physical and mental wellness. 
												It can be used as a tool to condition the body and mind so that it performs at an optimal state of health and energy. I want to be able to help people learn 
												how to use that tool successfully. I started Adaptive Fitness with one purpose in mind. To help you live 
												with greater health, happiness, and freedom. I genuinely believe that we can all achieve whatever we want in life, but 
												the desire must first come from within. I focus on fitting the training and nutrition to you and not the other way around. 
												I’ve built the foundation around the fact that every single person is an individual: different body, goals, hormones, 
												social responsibilities, schedules, dietary history, and views on what “being fit” really means. </p>
			
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card quote">
								
							<div className="card-body">
									
									<h1 className="card-text center"><em>"TRUST THE PROCESS" </em></h1>
									
								</div>
							</div>
							
							
							<div className="card mb-3">
								<div className="row">
									
									<div className="col-md-7">
										<div className="about-content">
											<div className="card-body">
												<h2 className="card-title">My Story</h2>
												<p className="card-text">I was born and raised in Alabama where my childhood was filled with playing a variety of all sports. 
												My mother, being a former athlete herself, contributed enourmously to the success I have had in life and as a lifetime athlete. Thanks to her love, support and encouragement,
												I went on to play professional baseball for 10 years and received a degree in Mechanical Engineering. Yep, my brain muscle is just as defined as my body!
												</p>
			
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="about-img">
							
											<img src={require('../../images/Jai-back.jpeg')} className="card-img" alt="Jai-back" width='260'/>
											</div>
											
									</div>
								</div>
							</div>
									
					
						</div>
						
					
				
						
					</div>
					<section id="banner" className=" static"
					style={{
						backgroundImage: `url(${Banner})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}>
			        <div className="container">
			            
							<a href="/register" className="btn btn-primary btn-top">
			                	<h2>GET YOUR FREE 10 MINUTE CONSULTATION NOW!</h2>
							</a>
			            
			            

			        </div>
			    </section>
				
			</div>
       
);

export default AboutPage;