import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';
import CalenderPage from '../Calender';

const DashboardPage = () => (
  <div id="dash" className="dashboard">
    
    <div className="card-group">
    <div className="col-sm-6 ">
      <div className="card mb-3">
        <div className="card-body">
          <CalenderPage />
        </div>
      </div>
    </div>
    
      <div className="col-sm-6">
        <div className="card dashboard-card mb-3">
          <div className="card-body center">
          <h3 className="card-title ">Messages</h3>
          
            <Messages />
            <br/>
            <li><a href="#">Inbox</a></li>
            <li><a href="#">Sent Messages</a></li>
            
            
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card dashboard-card mb-3">
          <div className="card-body center">
            <h3 className="card-title">Documents</h3>
            
              <li><a href="#">Workout Plans</a></li>
              <li><a href="#">Nutrition Plans</a></li>
              <li><a href="#">Calculators</a></li>
            
            
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    
    
    
    
  </div>
);

const condition = authUser => !!authUser;

export default compose( 
  withEmailVerification,
  withAuthorization(condition),
)(DashboardPage);
