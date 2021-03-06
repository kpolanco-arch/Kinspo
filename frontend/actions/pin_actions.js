import * as PinAPIUtil from "../util/pins_util";

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';

const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
});

const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
});

const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
});

export const fetchPins = () => dispatch => {
    return (
        PinAPIUtil.fetchPins().then(pins => dispatch(receivePins(pins)))
    )
}

export const fetchPin = (pinId) => dispatch => {
    return (
        PinAPIUtil.fetchPin(pinId).then(pin => dispatch(receivePin(pin)))
    )
}

export const createPin = (pin) => dispatch => {
    return (
        PinAPIUtil.createPin(pin).then(pin => dispatch(receivePin(pin)))
    )
}

export const updatePin = (pin) => dispatch => {
    return (
        PinAPIUtil.updatePin(pin).then(pin => dispatch(receivePin(pin)))
    )
}

export const deletePin = (pinId) => dispatch => {
    return (
        PinAPIUtil.deletePin(pinId).then(() => dispatch(removePin(pinId)))
    )
}