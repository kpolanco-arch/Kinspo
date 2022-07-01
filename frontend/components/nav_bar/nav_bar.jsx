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
        <div className='nav-bar'>
            <Link to="/" >
            <button className='home-button' type="submit">Home</button>
            </Link>
            <div className='search-bar-container'>
                <input className="search"
                    type="text"
                    placeholder='Search'
                /> 
            </div>
            {/* <p>Hello, {currentUser.email}</p> */}
            <Link to={`/users/${currentUser.id}`} >
               <button type="submit">{currentUser.email}</button>
            </Link>
            <button onClick = {logout}>Log Out</button>
            <br />
            
        </div>
    ):(
            <nav className='personal-links'>
                <div className="nav-bar">
                    <a href="https://github.com/kpolanco-arch/Kinspo">Github</a>
                </div>
                <div className="nav-bar">
                    <a href="https://www.arch.columbia.edu/student-work?student_name_contains=Karen%20Polanco">Portfolio</a>
                </div>
                <div className="nav-bar">
                    <a href="http://linkedin.com/in/karen-polanco-374721180/">LinkedIn</a>
                </div>
                <button className= "btnleft" onClick={() => openModal('login')}>Log In</button>
                &nbsp;&nbsp;
                <button className="btnright" onClick={() => openModal('signup')}>Sign Up</button>
            </nav>
    );

    return (
        <header className="nav-bar">
            <Link to="/" >
                <h1 className="logo">Kinspo</h1>
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