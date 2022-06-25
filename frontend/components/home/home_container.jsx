import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session';
import { logout } from '../../actions/session';
import { open } from '../../actions/modal';
import Home from './home';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: (modal) => dispatch(open(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);