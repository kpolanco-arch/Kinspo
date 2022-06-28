import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session';
import { open } from '../../actions/modal';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
    // debugger
    // console.log(state)
  currentUser: state.entities.users[state.session.id],
  user: state.entities.users[ownProps.match.params.userId]

});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(open(modal)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar)) ;