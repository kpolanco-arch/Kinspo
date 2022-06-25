import React from "react";
import ReactDOM from "react-dom";
import createStore from './store/store';
import configureStore from "./store/store";
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store 
    // let preloadedState = undefined;
    if (window.currentUser) {
        const preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
        store = configureStore(preloadedState)
    } else {
        store = configureStore()
    }
   window.store = store
    ReactDOM.render(<Root store={store} />, root);
})