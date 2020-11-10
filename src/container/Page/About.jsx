import React, { Component } from 'react'
//import AboutSection from '../../components/AboutSection';

class About extends Component {
    render() {
        return (
            <div className="body">
				
				<div id="about-page">
				    
					<div className="about">
						<div className="container fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
							       
							<img src={require('../../images/Jai-smiling.jpg')} className="about-img" alt="Jai-smiling" height='450' width='1160'/>
							
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
												<h2 className="card-title">Card title</h2>
												<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
			
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="card mb-3">
								<div className="row">
									
									<div className="col-md-7">
										<div className="about-content">
											<div className="card-body">
												<h2 className="card-title">Card title</h2>
												<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
			
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
			
        )
    }
}

export default About
