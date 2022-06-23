import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session';
import Signup from './signup';


// const mapStateToProps = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'signup',
//         navLink: <Link to="/login">log in instead</Link>,
//     };
// };

const mapDispatchToProps = dispatch => {
    return {
        createNewUser: (formuser) => dispatch(signup(formuser)),
    };
};

export default connect(null, mapDispatchToProps)(Signup);
