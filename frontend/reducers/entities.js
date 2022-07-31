import { combineReducers } from 'redux';
import UsersReducer from './user';
import PinsReducer from './pins';
import savedReducer from './saved';
import BoardsReducer from './boards';
import FollowsReducer from './follows';


const entitiesReducer = combineReducers({
    users: UsersReducer,
    pins: PinsReducer,
    saved: savedReducer,
    boards: BoardsReducer,
    follows: FollowsReducer
})


export default entitiesReducer;