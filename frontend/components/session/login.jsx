import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { open, close } from '../../actions/modal';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
        // this.handleOpenModal = this.handleOpenModal.bind(this);    
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        // this.props.processForm(user).then(this.props.closeModal);
        this.props.processForm(this.state).then(this.props.closeModal);

            // .then(() => this.props.history.push('/pins'));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleDemoUser(e){
        e.preventDefault();
        const demoUser = {email: "DEMO@gmail.com", password: "password"}
        this.setState(demoUser);
        this.props.processForm(demoUser).then(this.props.closeModal)
    }

    // handleOpenModal(e) {
    //     e.preventDefault();
    //     this.props.openModal('signup')
    // }

    render() {
        return (
            <div className="session-form">
                <form  onSubmit={this.handleSubmit} >
                    <br />                
                    <div onClick={() => { this.props.closeModal(); }} >
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    // className="close-button"X
                    </div>
                    <div className='login-message'> Welcome to Kinspo </div>
                    <br />
                    <label className='text-box'>
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            placeholder='Email'
                        />
                    </label>
                    <br />
                    <label className='text-box'>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder='Password'
                        />
                    </label>
                    <button className='login-button' type="submit" value="">Log In</button>    
                    {/* <input type="submit" value = "Log In!" />    */}
                    OR
                    <button className='second-button' onClick={e => this.handleDemoUser(e)}>DemoUser</button>
                    Don't have an account?
                    {this.props.otherForm}
                    {this.renderErrors()} 
                   
                    
                    {/* <button onClick={() => open('signup')}>Sign Up</button> */}
                    {/* <Link className="btn" to="/signup">Sign Up</Link> */}
                </form>
            </div>
        );
    }
}

export default withRouter(Login);

