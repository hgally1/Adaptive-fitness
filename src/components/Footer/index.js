import React from 'react';
import { Link } from 'react-router-dom';

// import { AuthUserContext } from '../Session';

import * as ROUTES from '../../constants/routes';
// import * as ROLES from '../../constants/roles';

const Footer = () => (
  
  <div>
    <div id="bottom">
      <div className="container center fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
          <div className="row">
              <div className="col">
                <a href="/" className="navbar-brand">
                  <img src={require('../../images/Logo-3.png')} className="footer-logo" alt="logo" height='100' width='120' />
                  {/* <img src={require('../../images/Logo2.png')} className="logo" height='250' width='250'  /> */}
                </a>
               </div>


              <div className="col"> 
                <div className="row footer-bar">
                  
                  <div className="col-md-4">
                    
                      
                      <ul>
                        
                    
                        <li><Link to={ROUTES.HOME}>Home</Link></li>
                        
                        <li><Link to={ROUTES.ABOUT}>About</Link></li>

                        {/* </ul>
                        </div>
                      
                        <div className="col-md-4">
                    
                      
                    <ul> */}
                  
                        <li><Link to={ROUTES.SERVICES}>Services</Link></li>
                        
                        <li><Link to={ROUTES.REGISTER}>Apply</Link></li>
                        
                        
                      </ul>
                    
                  </div>
                  
                </div>
              </div>
                      
            </div>
            
          </div>
        
        
      </div>

      </div>
);


export default Footer;
