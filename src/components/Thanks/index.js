import React from 'react';
// import ThankYouVidfrom './Form'

const Thanks = () => (
    <div className="body">
        <section className="container fadeInDown">
            <div className="center fadeInDown">
  
            <iframe src="https://player.vimeo.com/video/498457771" width="640" height="427" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  
            </div>
  
        </section>
        <div>
			<div id="main-slider" className="static">
				<div className="container fadeInDown">
					
					<div className="carousel slide">
						<ol className="carousel-indicators">
							<li data-target="#main-slider" data-slide-to="0" className="active"></li>
							<li data-target="#main-slider" data-slide-to="1"></li>
                            <li data-target="#main-slider" data-slide-to="2"></li>
                            <li data-target="#main-slider" data-slide-to="3"></li>
                            <li data-target="#main-slider" data-slide-to="4"></li>
						</ol>
						<div className="carousel-inner">

            
                            <div className="item active  " data-interval="10000">
                                <div className="carousel-content center ">
                    
                        
                                    <div className="card"  >
                                        <div className="row ">
                                            <div className="col">
                                            
                                                <img src={require('../../images/jai-before-after.jpeg')} className="d-block w-100" width="590"  />
                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                        

                            <div className="container item " data-interval="10000">
                                <div className="carousel-content center" >
                                    <div className="card"  >
                                        <div className="row ">
                                            <div className="col">
                                                
                                                <img src={require('../../images/Angie-before-after.JPG')} className="d-block w-100" width="630"  />
                                            
                                            </div>
                                                    {/* Angie down 100+lbs--Braz down 40+lbs--other 33+lbs down */}
                                           
                                                
                                                
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className="container item " data-interval="10000">
                                <div className="carousel-content center">
                                    <div className="card">
                                        <div className="row">
                                            <div className="card-body"></div>
                                                <div className="col-md-6">
                                                {/* <div className="col"> */}
                                                <img src={require('../../images/Angie-smiling.JPG')} className="d-block w-100" height="280" width="290"  />
                                                </div>
                                                <div className="col-md-6">
                                            
                                                <iframe src="https://player.vimeo.com/video/496070202"  width="290" height="550" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container item " data-interval="10000">
                                <div className="carousel-content center" >
                                    <div className="card"  >
                                        <div className="row ">
                                            <div className="col">
                                                
                                                <img src={require('../../images/testimonial-pic-3.jpeg')} className="d-block w-100" width="630"  />
                                            
                                            </div>
                                                    {/* Angie down 100+lbs--Braz down 40+lbs--other 33+lbs down */}
                                           
                                                
                                                
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            
                            <div className="container item " data-interval="10000">
                                <div className="carousel-content">
                                    <div className="card">
                                        <div className="row">
                                        {/* <div className="col"> */}
                                            <div className="card-body center ">
                                                <iframe src="https://player.vimeo.com/video/496069231"  className="d-block w-100" width="340" height="538" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                            </div>
                                        {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            </div>
                            {/* <a className="prev " href="#main-slider" role="button" data-slide="prev">
                                <span className="prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="next" href="#main-slider" role="button" data-slide="next">
                                <span className="next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a> */}
                    </div>
                
                </div>
            </div>
        </div>
    
              
    </div>
  
  
);

export default Thanks;

{/* <div id="main-slider" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#main-slider" data-slide-to="0" className="active"></li>
    <li data-target="#main-slider" data-slide-to="1"></li>
    <li data-target="#main-slider" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span  aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}