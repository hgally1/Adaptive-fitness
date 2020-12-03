import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <header id="header">

    <nav className="navbar navbar-inverse" role="banner">
            <div className="container fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        
                    </button>
                    
          <a href="/" className="navbar-brand">
            <img src={require('../../images/Logo2.png')} className="logo" height='250' width='250'  />
          </a>
                </div>

                <div className="collapse navbar-collapse navbar-right">
                    <ul className="nav navbar-nav">
            
                        <li className="home-nav "><Link to={ROUTES.DASHBOARD}>Dashboard</Link></li>
            
                        <li className=""><Link to={ROUTES.ACCOUNT}>Account</Link></li>
                        {!!authUser.roles[ROLES.ADMIN] && (
                          <li>
                            <Link to={ROUTES.ADMIN}>Admin</Link>
                          </li>
                        )}
                         <li className="">
                          <SignOutButton />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
    </header>
  
);

const NavigationNonAuth = () => (
  <header id="header">

    <nav className="navbar navbar-inverse" role="banner">
            <div className="container fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        
                    </button>
                    
          <a href="/" className="navbar-brand">
            <img src={require('../../images/Logo2.png')} className="logo" height='250' width='250'  />
          </a>
                </div>

                <div className="collapse navbar-collapse navbar-right">
                    <ul className="nav navbar-nav">
            
                        <li className="home-nav "><Link to={ROUTES.HOME}>Home</Link></li>
                        <li className=""><Link to={ROUTES.ABOUT}>About</Link></li>
                        <li className=""><Link to={ROUTES.SERVICES}>Services</Link></li>
                        
                        <li className=""><Link to={ROUTES.SIGN_IN}>Sign In</Link></li>
                        <li className=""><a href="#"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    
    </header>
);

export default Navigation;
