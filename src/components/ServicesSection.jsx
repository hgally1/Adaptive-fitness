import React from 'react';

const ServicesSection = (props) => {
	return (
		<div className="d-flex justify-content-center">
			<div className="features">
				<div className="col-md-3 fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
					<div className="feature-wrap">
						<div className="icon">
							<img src={props.img} className={props.img}></img>
						</div>
						<h2>{props.title}</h2>
						<p>{props.desc}</p>
						<div className="btns">
							<a className="btn btn-primary btn-top" href="/services">Learn More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

ServicesSection.defaultProps = {
	img: 'Image Here',
	title: 'Title Here',
	desc: 'Desc Here'
}

export default ServicesSection;