import React from 'react'

const Package3 = () => (
            <div className="body">
				<section >	
				<div id="packages" className="packages" >
			        <div className="container fadeInDown">
			            <div className="center fadeInDown">
							<h1><u>Personal Coaching</u></h1> 
			                <p className="lead">Transforming your body comes from having a strategic plan, designed individually for your body and your lifestyle. After that, it’s consistency and commitment that creates the results you’re searching for. Most of the time, people make it out to be more complicated than it needs to be…
							This is exactly where I come in to provide the solution for your personal breakthrough. I create a completely individualized plan in a simplified way so you can actually stick to it long-term (both fitness and nutrition).</p>
							<img src={require('../../../images/fat-to-fit.jpg')}  alt="workout" width='750' />

						<div className="row center">
							<h1><strong>$200</strong></h1>
						</div>
						
						<div className="row center">
							<ul class="list-unstyled">
								<li>6 weeks of one-on-one coaching!</li>
								<li>Weekly coaching sessions!</li>
								<li>Personalized fitness, macro and nutrition coaching!</li>
								<li>Workout & Cardio guides!</li>
							</ul>
							
						</div>
						</div>
					</div>
					
						<div className="container center fadeInDown">
							<div className="card-group center ">
								<div className="card col">
								<img src={require('../../../images/do-something-great-neon.jpg')}  width="300" className="card-img-top" alt="..."/>
									<div className="card-body">
										<h1 className="card-title">Card title</h1>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a className="btn btn-primary btn-top" href="/register">Let's do it!</a>
									</div>
								</div>
								
							</div>
						</div>
					
				</div>
				</section>
            </div>
        );
  

export default Package3