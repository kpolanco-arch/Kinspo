import { RECEIVE_CURRENT_USER } from "../actions/session";
import { LOGOUT_CURRENT_USER } from "../actions/session";


const _nullSession = {
    currentUser: null
};

const sessionReducer =(state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};


export default sessionReducer;
