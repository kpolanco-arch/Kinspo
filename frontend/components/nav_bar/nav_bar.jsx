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
        <div className='nav-bar-new2'>
            <Link to="/" >
                <h1 className="logo">Kinspo</h1>
            </Link>
            <Link to="/" >
            <button className='home-button' type="submit">Home</button>
            </Link>
            <div className='search-bar-container'>
                <input className="search"
                    type="text"
                    placeholder= "Search" />
            </div>
            <div className='icon-navbar'>
                <a className='link-nav' target="_blank" rel="noopener noreferrer" href="http://linkedin.com/in/karen-polanco-374721180/">
                <i className="fa fa-linkedin-square"></i></a>
            </div>
            <div className='icon-navbar'>
                
                <a className='link-nav' target="_blank" rel="noopener noreferrer" href="https://github.com/kpolanco-arch/Kinspo">
                    <i className="fa fa-github"></i>
                </a>
            </div>
            <div className='icon-navbar'>
                <a className='link-nav' target="_blank" rel="noopener noreferrer" href="https://github.com/kpolanco-arch">
                    <i className="fa-solid fa-face-smile"></i>
                    {/* <i className='fas fa-smile'></i> */}
                </a>
            </div>
            <Link to={`/users/${currentUser.id}`} className='user-profile-letter'>
               <button  type="submit">{(currentUser.email)[0]}</button>
            </Link>
            <Link to="/">
            <button className='logout-button-nav' onClick = {() => logout()}>Log Out</button>
            </Link>
            <br />
            
        </div>
    ):(     <div>
                
                <nav className='personal-links'>
                    <div>
                    <Link className='logo-link' to="/" >
                        <img className='logo-src' src="https://kinspo-dev.s3.amazonaws.com/Asset+1.svg" alt="" />
                        <h1 className="logo">Kinspo</h1>
                    </Link>
                    </div>
                <div className='personal-links-right'>
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
                    </div>
                </nav>
           </div> 
    );

    return (
        <header className="nav-bar-new1">
            {/* <Link to="/" >
                <h1 className="logo">Kinspo</h1>
            </Link> */}
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