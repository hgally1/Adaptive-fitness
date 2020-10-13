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
	    			</header>

					<Route path="/" exact component={Home} />
					<Route path="/about/" component={About} />
					<Route path="/services/" component={Services} />
					<Route path="/Guides/" component={Guides} />
					<Route path="/contact/" component={Contact} />

					<Footer/>
				</div>
			</Router>
		)
	}
}

export default Index;