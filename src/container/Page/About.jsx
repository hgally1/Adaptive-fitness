import React, { Component } from 'react'
import AboutSection from '../../components/AboutSection';

class About extends Component {
    render() {
        return (
            <div>
                <section id="team-area">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>About</h2>
			                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</p>
			            </div>
			            <div className="row">
			                <AboutSection
			                	img=""
			                	name="Jai"
			                	job=""
			                	instagram="#"
			                	
			                />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About
