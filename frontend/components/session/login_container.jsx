import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session';
import Login from './login';
import { open, close } from '../../actions/modal';

const mapStateToProps = (state) => {
    return {
        formtype: "Log In",
        // loginErrors: state.errors.loginErrorSession
    }
}

const mapDispatchToProps = dispatch => {
    return {
       
        processForm: (formuser) => dispatch(login(formuser)),
        openModal: () => dispatch(open('signup')),
        closeModal: () => dispatch(close())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);