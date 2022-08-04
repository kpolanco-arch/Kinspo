import React from "react";
import { withRouter } from 'react-router-dom';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state).then(this.props.closeModal);
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

    render() {
        return (
            <div className="session-form">
                <form onSubmit={this.handleSubmit}>
                    <div onClick={() => {this.props.closeModal();}} className="close-button">
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </div>
                    <div>
                        <img className='modal-asset' src="https://kinspo-dev.s3.amazonaws.com/Asset+1.svg" alt="" />
                    </div>
                    <div className='login-message'> Welcome to Kinspo </div>
                    <br />
                    <h2>Find new ideas to try</h2>
                    <div className='text-box'>
                        <br />
                        <label className='text-box'>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder='Email'
                            />
                        </label>
                        <br />
                        <label className='text-box'>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder='Password'                            />
                        </label>
                        <br />
                        <button className='login-button' type="submit">Sign Up</button>
                        Need to Log In?
                        {this.props.otherForm}
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Signup);