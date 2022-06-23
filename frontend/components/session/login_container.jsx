import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session';
import Login from './login';


const mapDispatchToProps = dispatch => {
    return {
        processForm: (formuser) => dispatch(login(formuser)),
    };
};

export default connect(null, mapDispatchToProps)(Login);