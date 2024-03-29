import { RECEIVE_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";

const FollowsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_FOLLOWS:
            return action.follows
        case RECEIVE_FOLLOW:
            nextState[action.follow.id] = action.follow
            return nextState;
        case REMOVE_FOLLOW:
            // debugger
            delete nextState[action.followId.id]
            return nextState;
        default:
            return state;
    }
};


export default FollowsReducer;