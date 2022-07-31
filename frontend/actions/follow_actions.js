import * as FollowAPIUtil  from "../util/follow_util";

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollows = follows => ({
    type: RECEIVE_FOLLOWS,
    follows
});

const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

const removeFollow = followId => ({
    type: REMOVE_FOLLOW,
    followId
});


export const fetchFollows = () => dispatch => {
    return (
        FollowAPIUtil.fetchFollows().then(follows => dispatch(receiveFollows(follows)))
    )
}

export const createFollow = (follow) => dispatch => {
    return (
        FollowAPIUtil.createFollow(follow).then(newfollow => dispatch(receiveFollow(newfollow)))
    )
}

export const deleteFollow = (followId) => dispatch => {
    return (
        FollowAPIUtil.deleteFollow(followId).then(() => dispatch(removeFollow(followId)))
    )
}