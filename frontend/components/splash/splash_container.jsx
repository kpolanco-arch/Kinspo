import React from "react";
import { connect } from "react-redux";
import Splash from "./splash";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(Splash);