import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm'

export class Login extends Component {
    render() {
        return (
            <div className="body">
				
                <div id="login-page">
                <div className="login">
			        <div className="container">
                        
                        <div className="center fadeInDown">        
			                <h2>Login</h2>
                        </div>
                        <section>
                        <div className="row">
                            <LoginForm />
                        </div>
                        </section>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Login
