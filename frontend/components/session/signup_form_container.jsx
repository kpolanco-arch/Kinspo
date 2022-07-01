import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session';
import Signup from './signup';
import { close, open } from '../../actions/modal';


const mapStateToProps = ({ errors }) => {
    return {
        formType: 'Sign Up',
        errors: errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNewUser: (formuser) => dispatch(signup(formuser)),
        otherForm: (
            <button className='other-form' onClick={() => dispatch(open('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(close())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
