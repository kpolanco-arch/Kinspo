import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';

export default () => (
    <div>
        {/* <Routes> */}
        <Route path="/" component={NavBarContainer} />
        <Route path="/signup" component={SignUpFormContainer} />
        <Route path="/login" component={LogInFormContainer } />
        {/* </Routes> */}
    </div>
);
