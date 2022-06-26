import * as APIUtil from "../util/session";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = user => dispatch => (
    APIUtil.postUser(user).then(currentUser => (dispatch(receiveCurrentUser(currentUser))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
    APIUtil.postSession(user).then(currentUser => (dispatch(receiveCurrentUser(currentUser))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);


export const logout = () => dispatch => (
    APIUtil.deleteSession().then(() => (dispatch(logoutCurrentUser())))
);