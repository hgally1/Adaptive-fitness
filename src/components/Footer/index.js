import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Footer = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <FooterAuth authUser={authUser} />
      ) : (
        <FooterNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const FooterAuth = ({ authUser }) => (


  <div>
    <div id="bottom">
      <div className="container fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
          <div className="row">
              <div className="col-md-2">
                <a href="/home" className="navbar-brand">
                  <img src={require('../../images/Logo-3.png')} className="footer-logo" alt="logo" height='250' width='250' />
                </a>
              </div>


              <div className="col-md-10">
                <div className="row footer-bar">
                  
                  <div className="col-md-3">
                    <div className="widget">
                      <h3>Site Map</h3>
                      <ul>
                        
                    
                        <li><Link to={ROUTES.DASHBOARD}>Dashboard</Link></li>
                        <li><Link to={ROUTES.ACCOUNT}>Account</Link></li>
                        
                        {!!authUser.roles[ROLES.ADMIN] && (
                          <li>
                            <Link to={ROUTES.ADMIN}>Admin</Link> 
                          </li>
                        )}
                        {/* <li><a href="/messages">Messages</li>
                        <li><a href="/calender">Calender</li> 
                        <li><a href="/documents">Documents</li>
                        */}
                        
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
                    
          </div>
          
        </div>
        
        
      </div>

      
);

const FooterNonAuth = () => (
  <div>
    <div id="bottom">
      <div className="container fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
          <div className="row">
              <div className="col-md-2">
                <a href="/" className="navbar-brand">
                  <img src={require('../../images/Logo-3.png')} className="footer-logo" alt="logo" height='250' width='250' />
                </a>
              </div>


              <div className="col-md-10">
                <div className="row footer-bar">
                  
                  <div className="col-md-3">
                    <div className="widget">
                      <h3>Site Map</h3>
                      <ul>
                        
                    
                        <li><Link to={ROUTES.HOME}>Home</Link></li>
                        <li><Link to={ROUTES.ABOUT}>About</Link></li>
                        <li><Link to={ROUTES.SERVICES}>Services</Link></li>
                        
                        
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                  
                    <div className="widget">
                      
                      <ul>
                        
                        <li><Link to={ROUTES.SIGN_UP}>Sign Up</Link></li>
                        <li><Link to={ROUTES.SIGN_IN}>Sign In</Link></li>
                        
                        
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                      
            </div>
            
          </div>
        
        
      </div>

      </div>
);


export default Footer;
