import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm } from '../../modules';

class Auth extends React.Component {
    render() {
        return (
            <section className="auth">
                <div className="auth__content">
                    <Route exact path={['/', '/signin']} component={LoginForm} />
                </div>
            </section>
        )
    }
}

export default Auth;
