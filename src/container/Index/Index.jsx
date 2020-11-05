import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Home from '../Page/Home';
import About from '../Page/About';
import Services from '../Page/Services';
import Contact from '../Page/Contact';
import Login from '../Page/Login';
import Signup from '../Page/Signup';
import Register from '../Page/Register';
import Account from '../Page/Account';
import Admin from '../Page/Admin';
import ForgotPW from '../Page/ForgotPW';

import * as ROUTES from '../../constants/routes';

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
										<img src={require('../../images/Logo2.png')} className="logo" height='250' width='250'  />
									</a>
				                </div>

				                <div className="collapse navbar-collapse navbar-right">
				                    <ul className="nav navbar-nav">
				                        <li className="home-nav "><Link to="/">Home</Link></li>
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

					<Route exact path={ROUTES.HOME} exact component={Home} />
					<Route path={ROUTES.ABOUT} component={About} />
					<Route path={ROUTES.SERVICES} component={Services} />
					
					<Route path={ROUTES.CONTACT} component={Contact} />
					<Route path={ROUTES.LOGIN} component={Login} />
					<Route path={ROUTES.SIGNUP} component={Signup} />
					<Route path={ROUTES.REGISTER} component={Register} />
					<Route path={ROUTES.ACCOUNT} component={Account} />
					<Route path={ROUTES.ADMIN} component={Admin} />
					<Route path={ROUTES.PASSWORD_FORGET} component={ForgotPW} />

			

					<div>
						<section id="bottom">
			    			<div className="container fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
			        			<div className="row">
			            			<div className="col-md-2">
										<a href="#" className="navbar-brand">
										<img src={require('../../images/Logo-3.png')} className="logo" height='250' width='250' />
										</a>
			            			</div>
					
					
									<div className="col-md-10">
										<div className="row">
											
											<div className="col-md-3">
												<div className="widget">
													<h3>Site Map</h3>
													<ul>
														<li><a href="#">Home</a></li>
														<li><a href="#">About</a></li>
														<li><a href="#">Services</a></li>
														<li><a href="#">Contact</a></li>
														<li><a href="#">Login</a></li>
													</ul>
												</div>
											</div>
											<div className="col-md-3">
												<div className="widget">
													<h3>Site Map</h3>
													<ul>
														<li><a href="#">Home</a></li>
														<li><a href="#">About</a></li>
														<li><a href="#">Services</a></li>
														<li><a href="#">Contact</a></li>
														<li><a href="#">Login</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
													
								</div>
								
							</div>
						
						</section>
					</div>
				</div>
			
				
			</Router>
		)
	}
}



export default Index;