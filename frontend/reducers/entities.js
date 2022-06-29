import { combineReducers } from 'redux';
import UsersReducer from './user';
import PinsReducer from './pins';
import savedReducer from './saved';


const entitiesReducer = combineReducers({
    users: UsersReducer,
    pins: PinsReducer,
    saved: savedReducer
})


export default entitiesReducer;