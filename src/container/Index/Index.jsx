import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Home from '../Page/Home';
import About from '../Page/About';
import Services from '../Page/Services';
import Login from '../Page/Login';
import Contact from '../Page/Contact';

class Index extends Component {

	render(){
		return(
			<Router>
				<div>
					<header id="header">

						<nav className="navbar navbar-inverse" role="banner">
				            <div className="container">
				                <div className="navbar-header">
				                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				                        <span className="sr-only">Toggle navigation</span>
				                        <span className="icon-bar"></span>
				                        <span className="icon-bar"></span>
				                        <span className="icon-bar"></span>
				                    </button>
				                   
									<a href="#/ " className="navbar-brand">
										<img src={require('../../images/AF_logo.png')} className="logo" height='250' width='250'  />
									</a>
				                </div>

				                <div className="collapse navbar-collapse navbar-right">
				                    <ul className="nav navbar-nav">
				                        <li className="home-nav active"><Link to="/">Home</Link></li>
				                        <li className=""><Link to="/about">About</Link></li>
				                        <li className=""><Link to="/services">Services</Link></li>
				                        <li className=""><Link to="/contact">Contact</Link></li>
										<li className=""><Link to="/login">Login</Link></li>
										<li><a href="#"><i className="fa fa-instagram"></i></a></li>
				                    </ul>
				                </div>
				            </div>
				        </nav>
	    			
	    			</header>

					<Route path="/" exact component={Home} />
					<Route path="/about/" component={About} />
					<Route path="/services/" component={Services} />
					
					<Route path="/contact/" component={Contact} />
					<Route path="/login/" component={Login} />

					<footer id="footer">
						{/* <Footer /> */}
						
							<div className="container fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
								<div className="row">
									<div className="col-md-2">
										<a href="#" className="footer-logo">
										<img src={require('../../images/AF_transparent.png')} className="logo" height='250' width='250'  />
										</a>
										
									</div>
									
									<Footer />
								</div>
							</div>
					</footer>
					
				</div>
			</Router>
		)
	}
}

export default Index;