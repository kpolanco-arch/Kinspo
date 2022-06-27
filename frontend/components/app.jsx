import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import { AuthRoute } from '../util/route_utils';
import { ProtectedRoute } from '../util/route_utils';
import Modal from './home/modal';
import PinShowContainer from './pins/pin_show_container';
import pin_index_item_container from './pins/pin_index_item_container';


export default () => (
    <div>
        <NavBarContainer />
         <Modal />
        <Switch>
            <Route path="/pins/:pinId" component={pin_index_item_container} />
            <Route path="/" component={HomeContainer} />
        </Switch>
        {/* <Route path="/" component={NavBarContainer} /> */}
        {/* <AuthRoute path="/signup" component={SignUpFormContainer} />
        <Route path="/login" component={LogInFormContainer } /> */}
        {/* <ProtectedRoute path="/pins" component={} /> */}
    </div>
);
