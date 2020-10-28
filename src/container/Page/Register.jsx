import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm';

export class Register extends Component {
    render() {
        return (
            <div className="body">
				
                <div id="login-page">
                <div className="login">
			        <div className="container">
                        
                        <div className="center fadeInDown">        
			                <h2>Register</h2>
                        </div>
                        <section>
                        <div className="row">
                            <RegistrationForm />
                        </div>
                        </section>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Register
