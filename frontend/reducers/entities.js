import { combineReducers } from 'redux';
import sessionReducer from './session';


const entitiesReducer = combineReducers({
    users: sessionReducer
})


export default entitiesReducer;