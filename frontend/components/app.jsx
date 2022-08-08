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
import pin_show_item_container from './pins/pin_show_item_container';
import UserShowContainer from './users/user_show_container';
import PinCreateContainer from './pins/pin_create_container';
import BoardItem from './boards/board_item_container';
import UserShowPin from './users/user_show_pins_container';
import SavedPinsContainer from './saved/saved_pins_container';
import BoardCreateContainer from './boards/board_create_container';
import PinEdit from './pins/pin_edit_container';
import BoardEdit from './boards/board_edit_container';


export default () => (
    <div>
        <NavBarContainer />
         <Modal />
        <Switch>

            <AuthRoute path="/users/:userId/pins" component={UserShowPin}/>
            <AuthRoute path="/boards/:boardId/edit" component={BoardEdit} />
            <AuthRoute path= "/pins/:pinId/edit" component={PinEdit}/>
            <AuthRoute path="/boards/new" component={BoardCreateContainer} />
            
            <AuthRoute path="/pins/new" component={PinCreateContainer}/>
            <AuthRoute path="/users/:userId" component={UserShowContainer} />
            <AuthRoute path="/boards/:boardId" component={BoardItem} />

            <AuthRoute path="/pins/:pinId" component={pin_show_item_container} />
            
            <Route path="/" component={HomeContainer} />
        </Switch>
        {/* <Route path="/" component={NavBarContainer} /> */}
        {/* <AuthRoute path="/signup" component={SignUpFormContainer} />
        <Route path="/login" component={LogInFormContainer } /> */}
        {/* <ProtectedRoute path="/pins" component={} /> */}
    </div>
);
