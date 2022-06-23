import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import thunk from 'redux-thunk';

let preloadedState = undefined;
if (window.currentUser) {
    preloadedState = {
        session: {
            currentUser: window.currentUser
        }
    };
}
const configureStore = () => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk))
)

export default configureStore;