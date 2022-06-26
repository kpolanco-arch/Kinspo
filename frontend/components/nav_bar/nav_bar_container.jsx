import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session';
import { open } from '../../actions/modal';

const mapStateToProps = state => ({
    // debugger
    // console.log(state)
  
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(open(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);