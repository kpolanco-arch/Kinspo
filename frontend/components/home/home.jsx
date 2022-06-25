import React from 'react';
import { Link } from 'react-router-dom';
import LogInFormContainer from '../session/login_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

const Home = ({ currentUser, logout, openModal }) => {
    const login = () => (
        <div> 
            <NavBarContainer/>
            <h1>Welcome this is Home</h1>
            <LogInFormContainer />
           
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
            login()
    );
}

export default Home;