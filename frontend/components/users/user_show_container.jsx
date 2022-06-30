import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';
import { withRouter } from "react-router-dom";
import { fetchPins, deletePin } from '../../actions/pin_actions';
import { createSaved, fetchSaved } from '../../actions/save_action';
import { fetchBoards } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        // user: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        pins: Object.values(state.entities.pins),
        boards: state.entities.boards,
        saved: Object.values(state.entities.saved)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchPins: () => dispatch(fetchPins()),
        createSaved: (saved) => dispatch(createSaved(saved)),
        fetchSaved: () => dispatch(fetchSaved()),
        deletePin: (pinId) => dispatch(deletePin(pinId)),
        fetchBoards: () => dispatch(fetchBoards())

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow))
;