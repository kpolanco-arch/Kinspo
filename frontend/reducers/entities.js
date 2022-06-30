import { combineReducers } from 'redux';
import UsersReducer from './user';
import PinsReducer from './pins';
import savedReducer from './saved';
import BoardsReducer from './boards';


const entitiesReducer = combineReducers({
    users: UsersReducer,
    pins: PinsReducer,
    saved: savedReducer,
    boards: BoardsReducer
})


export default entitiesReducer;