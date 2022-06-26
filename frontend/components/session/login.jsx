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
        this.props.processForm(demoUser).then(this.props.closeModal)
    }

    // handleOpenModal(e) {
    //     e.preventDefault();
    //     this.props.openModal('signup')
    // }

    render() {
        return (
            <div className="session-form">
                <form onSubmit={this.handleSubmit} >
                    <br />                
                    <div onClick={() => { this.props.closeModal(); }} className="close-button">X</div>
                    Welcome to Kinspo
                    <br />
                    <label htmlFor="email">Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <br />
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button type="submit" value="">Log In!</button>    
                    {/* <input type="submit" value = "Log In!" />    */}
                    OR
                    <button onClick={this.handleDemoUser}>DemoUser</button>
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