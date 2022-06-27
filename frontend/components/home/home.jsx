import React from 'react';
import { Link } from 'react-router-dom';
import LogInFormContainer from '../session/login_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PinShowContainer from '../pins/pin_show_container';

const Home = ({ currentUser, logout, openModal }) => {
    const sessionlink = () => (
        <div> 

            {/* <NavBarContainer/> */}
            <h3>Welcome this is Home Container</h3>
        </div>
    )

    const userGreeting = () => (
        <div>
            {/* <NavBarContainer /> */}
            <h1>Hi, {currentUser.email}</h1>
            <button className="logout-button" onClick={logout}>Log Out</button>
            <PinShowContainer/>
        </div>
    );

    return (
        currentUser ?
            userGreeting(currentUser, logout) :
            sessionlink()
    );
}

export default Home;