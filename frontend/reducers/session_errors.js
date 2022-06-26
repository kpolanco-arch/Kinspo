import { RECEIVE_SESSION_ERRORS } from "../actions/session";
import { RECEIVE_CURRENT_USER } from "../actions/session";
import { CLOSE } from "../actions/modal";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
        case CLOSE:
            return [];

        default:
            return state;
    }
};