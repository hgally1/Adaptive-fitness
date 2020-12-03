import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';
import AboutPage from '../About';
import ServicesPage from '../Services';
import Package1 from '../Packages/Package1';
import Package2 from '../Packages/Package2';
import Package3 from '../Packages/Package3';

import RegisterPage  from '../Register';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import DashboardPage from '../Dashboard';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Footer from '../Footer';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      

      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.SERVICES} component={ServicesPage} />
      <Route path={ROUTES.PACKAGE1} component={Package1} />
      <Route path={ROUTES.PACKAGE2} component={Package2} />
      <Route path={ROUTES.PACKAGE3} component={Package3} />
    
      <Route path={ROUTES.REGISTER} component={RegisterPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.DASHBOARD} component={DashboardPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      
      <Footer />
    </div>
  </Router>
);

export default withAuthentication(App);
