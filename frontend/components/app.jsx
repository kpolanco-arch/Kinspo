import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import { AuthRoute } from '../util/route_utils';
import { ProtectedRoute } from '../util/route_utils';


export default () => (
    <div>
        <Route path="/" component={HomeContainer} />
        {/* <Route path="/" component={NavBarContainer} /> */}
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <Route path="/login" component={LogInFormContainer } />
        {/* <ProtectedRoute path="/pins" component={} /> */}
    </div>
);
