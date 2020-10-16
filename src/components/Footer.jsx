import React from 'react';

// import logo from '../../container/images/AF_logo_transparent.png'

const Footer = () => {
	return (
		<div>
			
			<section id="bottom">
			    <div className="container fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
			        <div className="row">
			            <div className="col-md-2">
			               <a href="#" className="footer-logo">
						   {/* <img src={props.img} className={props.img}></img>  */}
			                </a>
			            </div>
			            <div className="col-md-10">
			                <div className="row">
			                    <div className="col-md-3 col-sm-6">
			                        <div className="widget">
			                            <h3>Site Map</h3>
			                            <ul>
											<li><a href="#">Home</a></li>
											<li><a href="#">About</a></li>
											<li><a href="#">Services</a></li>
											<li><a href="#">Guides</a></li>
											<li><a href="#">Contact</a></li>
											<li><a href="#">Login</a></li>
										</ul>
			                        </div>
			                    </div>
							</div>
						</div>
					</div>
				</div>
			</section>
			                    
		</div>
	)
}

export default Footer;