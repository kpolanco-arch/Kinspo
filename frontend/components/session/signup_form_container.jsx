import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session';
import Signup from './signup';
import { close } from '../../actions/modal';


const mapStateToProps = (state) => {
    return {
        formType: 'Sign Up',
        // signupErrors: state.errors.signupErrorSession,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNewUser: (formuser) => dispatch(signup(formuser)),
        closeModal: () => dispatch(close())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
