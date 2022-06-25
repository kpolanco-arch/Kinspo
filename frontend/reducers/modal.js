import { OPEN } from "../actions/modal";
import { CLOSE } from "../actions/modal";

export default function modalReducer(state = null, action) {
    switch (action.type) {
        case OPEN:
            return action.modal;
        case CLOSE:
            return null;
        default:
            return state;
    }
}