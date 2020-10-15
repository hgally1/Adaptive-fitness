import React from 'react';

const ServicesSection = (props) => {
	return (
		<div className="features">
			<div className="col-md-3 col-sm-4 fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
				<div className="feature-wrap">
					<div className="icon">
						<img src={props.img} className={props.img}></img>
					</div>
					<h2>{props.title}</h2>
					<p>{props.desc}</p>
				</div>
			</div>
		</div>
	)
}

export default ServicesSection;