import React from 'react'

const Testimonials = () => {
    
        return (
            <div >
                <section id="testimonials" >
            <div className="container">
                <div className="center fadeInDown">
                    <h2>Here's what people are saying!</h2>
                </div>
                <div id="main-slider" className="no-margin">
                    <div className="carousel slide">
                        <ol className="carousel-indicators">
                            <li data-target="#main-slider" data-slide-to="0" className="active"></li>
                            <li data-target="#main-slider" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">

                            <div className="item active slider-img-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="carousel-content">
                                            
                                            </div>
                                        </div>

                                    </div>
                            
                                </div>
                            </div>

                            <div className="item slider-img-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="carousel-content">
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="prev hidden-xs hidden-sm" href="#main-slider" data-slide="prev">
                        <i className="fa fa-chevron-left"></i>
                    </a>
                    <a className="next hidden-xs hidden-sm" href="#main-slider" data-slide="next">
                        <i className="fa fa-chevron-right"></i>
                    </a>
                </div>
            </div>
            
            </section>
            </div>
        )
    
}

export default Testimonials
