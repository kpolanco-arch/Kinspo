import React from 'react';
import { Link } from 'react-router-dom';
import LogInFormContainer from '../session/login_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

const Home = ({ currentUser, logout, openModal }) => {
    const sessionlink = () => (
        <div> 

            <NavBarContainer/>
            <h3>Welcome this is Home Container</h3>
        </div>
    )

    const userGreeting = () => (
        <div>
            <h1>Hi, {currentUser.email}</h1>
            <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
    );

    return (
        currentUser ?
            userGreeting(currentUser, logout) :
            sessionlink()
    );
}

export default Home;