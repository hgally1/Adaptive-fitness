import React from 'react';

const ServicesSection = (props) => {
	
	return (
		<div >
			<div className="features">
				<div className=" col-md-4 col-sm-6 fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms" >
				<div className="inner">
					<div className="feature-wrap">
						<div className="img">
							<img src={props.img} alt="service-img"></img>
						</div>
						<div>
						<h2>{props.title}</h2>
						<p>{props.desc}</p>
						</div>
					</div>	
						<div className="btns">
							<a className="btn btn-primary btn-top" href={props.href}>Learn More</a>
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
	desc: 'Desc Here',
	href: 'Href Here'
}

export default ServicesSection;