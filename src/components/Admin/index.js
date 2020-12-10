import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import { UserList, UserItem } from '../Users';
import Messages from '../Messages';

import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const AdminPage = () => (
  <div >
    
      
  
    
    
    <div className="admin">
    <div className="card-group">
    <div className="">
        <div className="card admin-card mb-3">
          <div className="card-body center">
          <h5 className="card-title">Messages</h5>
            
            
            <li className=""><a>Inbox</a></li>
            <li className=""><a>Sent</a></li>
            <br/>
            <h5>Create New Message</h5>
            <Messages />
            
          
        </div>
      </div>
      </div>
      
     
      <div className="">
        <div className="card admin-card mb-3">
          <div className="card-body center">
            <h3 className="card-title">Documents</h3>
            
              <li><a href="#">Workout Plans</a></li>
              <li><a href="#">Nutrition Plans</a></li>
              <li><a href="#">Calculators</a></li>
            
            
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      
      <div className="">
        <div className="card admin-card mb-3">
          <div className="card-body center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      </div>
      
      
      
      <div className="">
        <div className="card admin-card mb-3">
          <div className="card-body center">
    <Switch>
      <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
      <Route exact path={ROUTES.ADMIN} component={UserList} />
    </Switch>
    </div>
    </div>
    </div>
    
    </div>
    </div>
    
    
    
    
    
    
    
    
  </div>
);

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(AdminPage);
