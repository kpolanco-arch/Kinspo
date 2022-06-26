import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
    const display = currentUser? (
        <div>
            <p>Hello, {currentUser.email}</p>
            <button onClick = {logout}>Log out</button>
        </div>
    ):(
            <nav className="login-signup">
                <button className= "btn" onClick={() => openModal('login')}>Log In</button>
                &nbsp;&nbsp;
                <button className="btn" onClick={() => openModal('signup')}>Sign Up</button>
            </nav>
    );

    return (
        <header className="nav-bar">
            <h1 className="logo">KINSPO</h1>
            <div>
                {display}
                 {/* <div>
                        <Link className="btn" to="/signup">Sign Up</Link>
                        <Link className="btn" to="/login">Log In</Link>
                </div> */}
            </div>
        </header>
    );
};