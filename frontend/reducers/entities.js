import { combineReducers } from 'redux';
import UsersReducer from './user';
import PinsReducer from './pins';


const entitiesReducer = combineReducers({
    users: UsersReducer,
    pins: PinsReducer
})


export default entitiesReducer;