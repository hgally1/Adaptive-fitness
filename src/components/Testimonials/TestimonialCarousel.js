import React, { Component } from 'react';


class TestimonialCarousel extends Component {
    render() {
        return (
            <div> 
                <div id="main-slider" className="static">
					<div className="container fadeInDown">
						<div className="center fadeInDown">
							<h2>Testimonials</h2>
							</div>
							<div className="carousel slide">
								<ol className="carousel-indicators">
									<li data-target="#main-slider" data-slide-to="0" className="active"></li>
									<li data-target="#main-slider" data-slide-to="1"></li>
									<li data-target="#main-slider" data-slide-to="2"></li>
								</ol>
								<div className="carousel-inner">

									<div className="item active" data-interval="10000">
                                    
										<div className="container-fluid ">
											<div className="carousel-content " >
											
												<div className=""  >
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h2>Down over 100lbs!</h2>
                                                    
                                                </div>
                                                
													<div className=" ">
                                                    <div className="col-md-4">
															<div className="">
																<iframe src="https://player.vimeo.com/video/496070202"  width="280" height="540" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
													
															</div>
														
													
														</div>
														<div className="col-md-5">
															
															<img src={require('../../images/Angie-before-after.JPG')}  width="540"  />
                                                            
														</div>
                                                        <div className="col-md-3">
                                                        <img src={require('../../images/Angie-smiling.JPG')}  width="265" />
                                                        </div>
														
												
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="container item " data-interval="10000">
                                <div className="carousel-content center" >
								
                                    <div className="card"  >
                                        <div className=" ">
                                            <div className="col">
                                                
                                                <img src={require('../../images/testimonial-pic-3.jpeg')} className="d-block w-100" width="530"  />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h2>Down 33lbs!</h2>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 

									<div className="container item " data-interval="10000">
									
										<div className="carousel-content">
											
											<div className="card">
												
													{/* <div className="col"> */}
                                                    <div className="col-md-7">
															
															<img src={require('../../images/Angie-before-after.JPG')}  width="590"  />
                                                            <div className="carousel-caption d-none d-md-block">
                                                    <h2>Down over 40lbs!</h2>
                                                    
                                                </div>
														</div>
														{/* Angie down 100+lbs--Braz down 40+lbs--other 33+lbs down */}
														<div className="col-md-5">
														<div className="card-body center">
															<iframe src="https://player.vimeo.com/video/496069231"  width="340" height="538" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
														</div>
													{/* </div> */}
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