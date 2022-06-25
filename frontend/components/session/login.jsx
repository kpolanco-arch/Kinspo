import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);    
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            // .then(() => this.props.history.push('/pins'));
    }

    handleDemoUser(e){
        e.preventDefault();
        const demoUser = {email: "DEMO@gmail.com", password: "password"}
        this.props.processForm(demoUser).then(this.props.closeModal)
    }

    handleOpenModal(e) {
        e.preventDefault();
        this.props.openModal()
    }

    render() {
        // console.log(this.props);
        return (
            <div className="session-form">
                <form>
                    Welcome to Kinspo
                    <br />
                    <label htmlFor="email">Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>

                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button onClick={this.handleSubmit}>Log In!</button>
                    </label>
                    OR
                    <button onClick={this.handleDemoUser}>DemoUser</button>
                    Don't have an account?
                    <button onClick={this.handleOpenModal}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Login;