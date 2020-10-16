import React from 'react';

const ServicesSection = (props) => {
	return (
		<div className="">
			<div className="features">
				<div className="feature-wrap">
					<div className="icon">
						<img src={props.img} className={props.img}></img>
					</div>
					<h2>{props.title}</h2>
					<p>{props.desc}</p>
					{/* <div className="home-btns">
						<a className="btn" href="#">Learn More</a>
					</div> */}
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