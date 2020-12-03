import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div>
    <div className="login">
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <div className="form-group text-center">
        <h1>SignIn</h1>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
        </div>
      </div>
    </div>  
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.DASHBOARD);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        this.setState({ error });
      });

    event.preventDefault();
  };
    

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      
          <form onSubmit={this.onSubmit}>
            {/* <div className="form-group text-center"> */}
              
              <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />
              
            {/* </div> */}
            {/* <div className="form-group text-center"> */}
                
                <input
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                />
              {/* </div> */}
              {/* <div className="form-check"> */}
              {/* </div> */}
              {/* <div className="form-group text-center"> */}
            <button disabled={isInvalid} type="submit">
              Sign In
            </button>
            {/* </div> */}

            {error && <p>{error.message}</p>}
          </form>
        
    );
  }
}

// class SignInGoogleBase extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { error: null };
//   }

//   onSubmit = event => {
//     this.props.firebase
//       .doSignInWithGoogle()
//       .then(socialAuthUser => {
//         // Create a user in your Firebase Realtime Database too
//         return this.props.firebase.user(socialAuthUser.user.uid).set({
//           username: socialAuthUser.user.displayName,
//           email: socialAuthUser.user.email,
//           roles: {},
//         });
//       })
//       .then(() => {
//         this.setState({ error: null });
//         this.props.history.push(ROUTES.DASHBOARD);
//       })
//       .catch(error => {
//         if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
//           error.message = ERROR_MSG_ACCOUNT_EXISTS;
//         }

//         this.setState({ error });
//       });

//     event.preventDefault();
//   };

//   render() {
//     const { error } = this.state;

//     return (
//       <form onSubmit={this.onSubmit}>
//         <div className="form-group text-center">
//         <button type="submit">Sign In with Google</button>
//         </div>

//         {error && <p>{error.message}</p>}
//       </form>
//     );
//   }
// }

// class SignInFacebookBase extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { error: null };
//   }

//   onSubmit = event => {
//     this.props.firebase
//       .doSignInWithFacebook()
//       .then(socialAuthUser => {
//         // Create a user in your Firebase Realtime Database too
//         return this.props.firebase.user(socialAuthUser.user.uid).set({
//           username: socialAuthUser.additionalUserInfo.profile.name,
//           email: socialAuthUser.additionalUserInfo.profile.email,
//           roles: {},
//         });
//       })
//       .then(() => {
//         this.setState({ error: null });
//         this.props.history.push(ROUTES.DASHBOARD);
//       })
//       .catch(error => {
//         if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
//           error.message = ERROR_MSG_ACCOUNT_EXISTS;
//         }

//         this.setState({ error });
//       });

//     event.preventDefault();
//   };

//   render() {
//     const { error } = this.state;

//     return (
//       <form onSubmit={this.onSubmit}>
//         <div className="form-group text-center">
//         <button type="submit">Sign In with Facebook</button>
//         </div>
//         {error && <p>{error.message}</p>}
//       </form>
//     );
//   }
// }

// class SignInTwitterBase extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { error: null };
//   }

//   onSubmit = event => {
//     this.props.firebase
//       .doSignInWithTwitter()
//       .then(socialAuthUser => {
//         // Create a user in your Firebase Realtime Database too
//         return this.props.firebase.user(socialAuthUser.user.uid).set({
//           username: socialAuthUser.additionalUserInfo.profile.name,
//           email: socialAuthUser.additionalUserInfo.profile.email,
//           roles: {},
//         });
//       })
//       .then(() => {
//         this.setState({ error: null });
//         this.props.history.push(ROUTES.DASHBOARD);
//       })
//       .catch(error => {
//         if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
//           error.message = ERROR_MSG_ACCOUNT_EXISTS;
//         }

//         this.setState({ error });
//       });

//     event.preventDefault();
//   };

//   render() {
//     const { error } = this.state;

//     return (
//       <form onSubmit={this.onSubmit}>
//         <div className="form-group text-center">
//         <button type="submit">Sign In with Twitter</button>
//         </div>
//         {error && <p>{error.message}</p>}
//       </form>
//     );
//   }
// }

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

// const SignInGoogle = compose(
//   withRouter,
//   withFirebase,
// )(SignInGoogleBase);

// const SignInFacebook = compose(
//   withRouter,
//   withFirebase,
// )(SignInFacebookBase);

// const SignInTwitter = compose(
//   withRouter,
//   withFirebase,
// )(SignInTwitterBase);

export default SignInPage;

export { SignInForm };
