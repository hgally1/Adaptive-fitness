import React, { Component } from 'react'
//import AboutSection from '../../components/AboutSection';

class About extends Component {
    render() {
        return (
            <div className="body">
				{/* <div id="about-page"> */}
				<div id="about-page">
					<section className="about">
						<div className="container">
							<div className="large-title text-center">        
									<h2>Hi! I'm Jai!</h2>
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
												<h2 className="card-title">Card title</h2>
												<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
			
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="card mb-3">
								<div className="row">
									<div className="col-md-4">
										<div className="about-img">
							
											<img src={require('../../images/Jai-back.jpeg')} className="card-img" alt="Jai-back" height='250' width='400'/>
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
									
					
						</div>
						
					
				
						
					</section>
				</div>
			</div>
			
        )
    }
}

export default About
