import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';

const DashboardPage = () => (
  <div className="dashboard">
    
    <div className="row">
      <div className="col-sm-6">
        <div className="card dashboard-card mb-3">
          <div className="card-body center">
          <h5 className="card-title">Messages</h5>
            <Messages />
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card dashboard-card mb-3">
          <div className="card-body center">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
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
