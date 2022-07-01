import React from 'react';
import { Link } from 'react-router-dom';
import LogInFormContainer from '../session/login_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PinIndexContainer from '../pins/pin_index_container';

const Home = ({ currentUser, logout, openModal }) => {
    const sessionlink = () => (
        <div> 

            {/* <NavBarContainer/> */}
            <h1 className='splash-body'>Get your next</h1>
            <h2 className='splash'>home decor idea</h2>
        </div>
    )

    const userGreeting = () => (
        <div>
            {/* <NavBarContainer /> */}
            {/* <h1>Hi, {currentUser.email}</h1>
            <button className="logout-button" onClick={logout}>Log Out</button> */}
            <PinIndexContainer/>
        </div>
    );

    return (
        currentUser ?
            userGreeting(currentUser, logout) :
            sessionlink()
    );
}

export default Home;