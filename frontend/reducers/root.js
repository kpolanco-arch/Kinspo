import { combineReducers } from "redux";
import sessionReducer from "./session";
import modalReducer from "./modal";
import entitiesReducer from "./entities";

const rootReducer = combineReducers({
    session: sessionReducer,
    modal: modalReducer,
    entities: entitiesReducer
});

export default rootReducer;