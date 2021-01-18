import React, { Component } from 'react';


class TestimonialCarousel extends Component {
    render() {
        return (
            <div> 
                <div id="main-slider" className="static">
					<div className="container fadeInDown">
						<div className="center fadeInDown">
							<h1>Testimonials</h1>
							</div>
							<div className="carousel slide">
								<ol className="carousel-indicators">
									<li data-target="#main-slider" data-slide-to="0" className="active"></li>
									<li data-target="#main-slider" data-slide-to="1"></li>
									<li data-target="#main-slider" data-slide-to="2"></li>
                                    <li data-target="#main-slider" data-slide-to="3"></li>
									<li data-target="#main-slider" data-slide-to="4"></li>
								</ol>
								<div className="carousel-inner">

									<div className="item active" data-interval="10000">
									<div className="container ">
										<div className="caption ">
                                                    <h2>Down over 140lbs!</h2>
                                                    
                                                </div>
											<div className="carousel-content " >
                                                <div className="row ">
                                                <div className="">
                                                    <div className="col-md-3">
															
																<iframe src="https://player.vimeo.com/video/496070202" className="d-block w-100" width="240" height="440" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
													
															</div>
														
													
													
														<div className="col-md-6">
															
															<img src={require('../../images/Angie-before-after.JPG')} className="d-block w-100" width="440"  />
                                                            
														</div>
                                                        <div className="col-md-3">
                                                        <img src={require('../../images/Angie-smiling.JPG')} className="d-block w-100" width="290" />
                                                        </div>
                                                        </div>	
												
													</div>
												
											</div>
										</div>
										
										
                                    </div>
									
                                        <div className="item " data-interval="10000">
										<div className="container ">
										<div className="caption">
                                                    <h2>Down 30lbs in 3 months and still losing!</h2>
                                                    
                                                </div>
                                            <div className="carousel-content">
                                                
											    <div className="row">
												<div className="">
													
                                                    <div className="col-md-6">
															
															<img src={require('../../images/IMG_0380.jpg')} className="d-block w-100" width="440"  />
                                                            
													</div>
                                                        
														
													<div className="col-md-6">
														<img src={require('../../images/IMG_0379-ba.jpg')} className="d-block w-100" width="440"  />
													</div>
													
												    </div>
													
											    </div>
										    </div>
                                        </div>
										
										</div>
									 

									<div className="item " data-interval="10000">
									<div className="container ">
									<div className="caption">
                                                    <h2>Down over 28lbs!</h2>
                                                    
                                                </div>
										<div className="carousel-content">
                                        
											<div className="row">
												
													{/* <div className="col"> */}
                                                    <div className="">
                                                    <div className="col-md-6">
															
															<img src={require('../../images/IMG_0153.jpg')} className="d-block w-100" width="430"  />
                                                            
														</div>
                                                        
                                                        
														{/* Angie down 100+lbs--Braz down 40+lbs--other 33+lbs down */}
														<div className="col-md-6">
														
															<iframe src="https://player.vimeo.com/video/496069231" className="d-block w-100" width="240" height="390" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
														</div>
													{/* </div> */}
												</div>
											</div>
										</div>
										</div>
									</div>
                                    <div className="item " data-interval="10000">
									<div className="container ">
									<div className="caption">
                                                    <h2>Down 40lbs!</h2>
                                                    
                                                </div>
                                <div className="carousel-content center" >
								
                                    <div className="row"  >
                                        <div className=" ">
                                            <div className="col">
                                                
                                                <img src={require('../../images/testimonial-pic-3.jpeg')} className="d-block w-100" width="410"  />
                                               
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
							</div>
							<div className="item " data-interval="10000">
									<div className="container ">
									<div className="caption">
                                                    <h2>Down over 120lbs and still going!</h2>
                                                    
                                                </div>
                                <div className="carousel-content center" >
								
                                    <div className="row"  >
                                        <div className=" ">
                                            <div className="col">
                                                
                                                <img src={require('../../images/heidi-before-after.png')} className="d-block w-130" width="440"  />
                                               
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
							</div>
								</div>
							</div>

							{/* <a className="prev hidden-xs hidden-sm" href="#main-slider" data-slide="prev">
								<i className="fa fa-chevron-left"></i>
							</a>
							<a className="next hidden-xs hidden-sm" href="#main-slider" data-slide="next">
								<i className="fa fa-chevron-right"></i>
							</a> */}
						</div>
					</div>
                </div>
        )
    };
}

export default TestimonialCarousel;