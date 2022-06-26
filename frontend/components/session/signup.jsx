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
                    <div onClick={() => {this.props.closeModal();}} className="close-button">X</div>
                    Welcome to Kinspo
                    <br />
                    <h4>Find new ideas to try</h4>
                    <div className="login-form">
                        <br />
                        <label htmlFor= "Email">Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}                            />
                        </label>
                        <br />
                        <button type="submit">Sign Up!</button>
                        Please {this.props.formType} or {this.props.otherForm}
                        
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Signup);