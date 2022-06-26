import { combineReducers } from "redux";
// import sessionReducer from "./session";
// import entitiesReducer from "./entities";
import session from "./session";
import entities from "./entities";
import ui from "./ui";
import errors from "./errors";

const rootReducer = combineReducers({
    // session: sessionReducer,
    // entities: entitiesReducer,
    session,
    entities,
    errors,
    ui

});

export default rootReducer;