import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props){
        super(props)
    }

componentDidMount () {
    // this.props.fetchUser(this.props.match.params.userId);
}

render(){
const { currentUser, logout, openModal } = this.props;
    const display = currentUser? (
        <div>
            <p>Hello, {currentUser.email}</p>
            {/* <Link to={`users/${this.props.match.params.userId}`} > */}
            <Link to={`users/${currentUser.id}`} >
               <button type="submit">{currentUser.email}</button>
            </Link>
            <button onClick = {logout}>Log out</button>
        <br />
            <div className='search-bar-container'>
                <input className="search-bar"
                    type="text"
                    placeholder='Search'
                />
            </div>
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
            <Link to="/" >
                <h1 className="logo">KINSPO</h1>
            </Link>
            <div>
                {display}
                 {/* <div>
                        <Link className="btn" to="/signup">Sign Up</Link>
                        <Link className="btn" to="/login">Log In</Link>
                </div> */}
            </div>
        </header>
    );
}};

export default NavBar;