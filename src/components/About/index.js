import React from 'react';

const AboutPage = () => (
    <div>
    <div className="body">
				
				<div id="about-page">
				    
					<div className="about">
						<div className="container">
			            	<div className="center fadeInDown mb-3" data-wow-duration="1000ms" data-wow-delay="600ms">
								
								{/* <a className="fa fa-instagram" href="{props.instagram}"></a>    */}
								<img src={require('../../images/Jai-smiling.jpg')} className="about-img" alt="Jai-smiling" height='450' width='960'/>
							</div>
							<div className="card mb-3">
								<div className="row">
									<div className="col-md-4">
										<div className="about-img">
											<img src={require('../../images/Jai-kneel.JPG')} className="card-img" alt="Jai-kneeling" height='850' width='360'/>
										</div>
									</div>
									<div className="col-md-7">
										<div className="about-content">
											<div className="card-body">
												<h2 className="card-title">Hi! I'm Jai!</h2>
												<p className="card-text"> I started Adaptive Fitness with one purpose in mind. To help you live 
												with greater health, happiness, and freedom. I genuinely believe that we can all achieve whatever we want in life, but 
												the desire must first come from within. I focus on fitting the training and nutrition to you and not the other way around. 
												I’ve built the foundation around the fact that every single person is an individual: different body, goals, hormones, 
												social responsibilities, schedules, dietary history, and views on what “being fit” really means. </p>
			
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="card md-3">
								
							<div class="card-body">
									
									<h1 className="card-text center"><em>"TRUST THE PROCESS" </em></h1>
									
								</div>
							</div>
							
							
							<div className="card mb-3">
								<div className="row">
									
									<div className="col-md-7">
										<div className="about-content">
											<div className="card-body">
												<h2 className="card-title">My Story</h2>
												<p className="card-text">I grew up in Alabama, where my childhood was filled with playing a variety of sports from the age of 6 years old. 
												My mother, being a former athlete herself, contributed enourmously to the love and success I have had as a lifetime athlete. Thanks to her love, support and encouragement,
												I went on to play college football, while pursuing my degree in Mechanical Engineering (yep, my brain muscle is just as defined as my body!), and played professional baseball for 10 years. 
												Fitness has always been a part of my life and has had tremendous power in creating the foundations for my physical and mental wellness. 
												It can be used as a tool to condition the body and mind so that it performs at an optimal state of health and energy.</p>
			
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="about-img">
							
											<img src={require('../../images/Jai-back.jpeg')} className="card-img" alt="Jai-back" height='250' width='400'/>
											</div>
											
									</div>
								</div>
							</div>
									
					
						</div>
						
					
				
						
					</div>
					<section id="banner" className="section static banner">
			        <div className="container">
			            <div className="center">
							<a href="/signup" className="btn btn-primary btn-top">
			                	<h2>SIGN UP TODAY!</h2>
							</a>
			            
			            </div>

			        </div>
			    </section>
				</div>
			</div>
        </div>
        
);

export default AboutPage;