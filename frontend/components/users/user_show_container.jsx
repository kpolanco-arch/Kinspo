import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        // user: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        // pins: Object.values(state.entities.pins)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        // fetchPins: () => dispatch(fetchPins())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow))
;