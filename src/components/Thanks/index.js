import React from 'react';
// import ThankYouVidfrom './Form'

const Thanks = () => (
  <div className="body">
    <div className="container fadeInDown">
        <section className="center fadeInDown">
  
            <iframe src="https://player.vimeo.com/video/498457771" width="640" height="427" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  
        </section>
  
        <section id="main-slider" className="static">
        
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

                   
                  <div className="item active">
                      <div className="container ">
                          
                             
                          <div className="carousel-content " >
                              <div className="card"  >
                                  <div className="row ">
                                      <div className="col-md-8">
                                          
                                          <img src={require('../../images/Angie-before-after.JPG')}  width="590"  />
                                       
                                      </div>
                                      {/* Angie down 100+lbs--Braz down 40+lbs--other 33+lbs down */}
                                      <div className="col-md-4">
                                          <div className="card-body">
                                              <iframe src="https://player.vimeo.com/video/496070202"  width="290" height="550" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                  {/* </div> */}
                                          </div>
                                      
                                  
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="container item ">
                      
                      <div className="carousel-content">
                          <div className="card">
                              <div className="row">
                                  {/* <div className="col"> */}
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
          {/* <ol className="carousel-indicators">
                  
          <a className="prev " href="#main-slider" data-slide="prev">
              <i className="fa fa-chevron-left"></i>
          </a>
          <a className="next " href="#main-slider" data-slide="next">
              <i className="fa fa-chevron-right"></i>
          </a>
          </ol> */}
      </div>
  
  
  
</section>				
  </div>
  </div>
  
);

export default Thanks;