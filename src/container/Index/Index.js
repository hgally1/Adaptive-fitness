import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Home from '../Page/Home';
import About from '../Page/About';
import Services from '../Page/Services';
import Guides from '../Page/Guides';
import Contact from '../Page/Contact';


class Index extends Component {
	render(){
		return(
			<Router>
				<div>
					<header id="header">
				        <Navbar/>

						<nav className="navbar navbar-inverse" role="banner">
				            <div className="container">
				                <div className="navbar-header">
				                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				                        <span className="sr-only">Toggle navigation</span>
				                        <span className="icon-bar"></span>
				                        <span className="icon-bar"></span>
				                        <span className="icon-bar"></span>
				                    </button>
				                   
				                    <Link to="/" className="navbar-brand"><img src="" alt="logo"/></Link>
				                </div>

				                <div className="collapse navbar-collapse navbar-right">
				                    <ul className="nav navbar-nav">
				                        <li className="home-nav active"><Link to="/">Home</Link></li>
				                        <li className=""><Link to="/about">About Us</Link></li>
				                        <li className=""><Link to="/services">Services</Link></li>
				                        <li className=""><Link to="/guides">Guides</Link></li>
				                        <li className=""><Link to="/contact">Contact</Link></li>
				                    </ul>
				                </div>
				            </div>
				        </nav>
	    			
	    			</header>

					<Route path="/" exact component={Home} />
					<Route path="/about/" component={About} />
					<Route path="/services/" component={Services} />
					<Route path="/guides/" component={Guides} />
					<Route path="/contact/" component={Contact} />

					<Footer/>
				</div>
			</Router>
		)
	}
}

export default Index;