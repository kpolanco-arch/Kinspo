import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import UserShow from './user_show';
import { withRouter } from "react-router-dom";
import { fetchPins, deletePin } from '../../actions/pin_actions';
import { createSaved, fetchSaved } from '../../actions/save_action';
import { fetchBoards } from '../../actions/board_actions';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        follows: state.entities.follows,
        currentUser: state.entities.users[state.session.id],
        pins: state.entities.pins,
        boards: state.entities.boards,
        saved: Object.values(state.entities.saved),
        users: state.entities.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchPins: () => dispatch(fetchPins()),
        fetchUsers: () => dispatch(fetchUsers()),
        createSaved: (saved) => dispatch(createSaved(saved)),
        fetchSaved: () => dispatch(fetchSaved()),
        deletePin: (pinId) => dispatch(deletePin(pinId)),
        fetchBoards: () => dispatch(fetchBoards()),
        fetchFollows: () => dispatch(fetchFollows()),
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (follow) => dispatch(deleteFollow(follow))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow))
;