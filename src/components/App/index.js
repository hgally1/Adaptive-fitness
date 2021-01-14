import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';
import AboutPage from '../About';
import ServicesPage from '../Services';
import ApplicationPage from '../Application';
import Package2 from '../Packages/Package2';
import Package3 from '../Packages/Package3';
import TestimonialPage from '../Testimonials';
import RegisterPage  from '../Register';
import Thanks from '../Thanks';
// import SignInPage from '../SignIn';
// import PasswordForgetPage from '../PasswordForget';
// import DashboardPage from '../Dashboard';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';
import Footer from '../Footer';

import * as ROUTES from '../../constants/routes';
// import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      

      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.SERVICES} component={ServicesPage} />
      {/* <Route path={ROUTES.PACKAGE1} component={Package1} /> */}
      <Route path={ROUTES.PACKAGE2} component={Package2} />
      <Route path={ROUTES.PACKAGE3} component={Package3} />
      <Route path={ROUTES.APPLICATION} component={ApplicationPage} />
      <Route path={ROUTES.THANKS} component={Thanks} />
      <Route path={ROUTES.REGISTER} component={RegisterPage} />
      <Route path={ROUTES.TESTIMONIALS} component={TestimonialPage} />
      {/* <Route path={ROUTES.SIGN_IN} component={SignInPage} /> */}
      {/* <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.DASHBOARD} component={DashboardPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
       */}
      <Footer />
    </div>
  </Router>
);

export default App;
