import { RECEIVE_SAVE } from "../actions/save_action";
import { REMOVE_SAVE } from "../actions/save_action";
import { RECEIVE_SAVEALL } from "../actions/save_action";

const savedReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_SAVEALL:
            return action.savedAll;
        case RECEIVE_SAVE:
            nextState[action.saved.id] = action.saved
            return nextState;
        case REMOVE_SAVE:
            delete nextState[action.savedId]
            return nextState;
        default:
            return state;
    }

};

export default savedReducer;