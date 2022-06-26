import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session';
import Login from './login';
import { open, close } from '../../actions/modal';
import errors from '../../reducers/errors';

const mapStateToProps = ({errors}) => {
    return {
        formtype: "login",
        errors: errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
       
        processForm: (formuser) => dispatch(login(formuser)),
        otherForm: (
            <button onClick={() => dispatch(open('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(close()),
        openModal: (modal) => dispatch(open(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);