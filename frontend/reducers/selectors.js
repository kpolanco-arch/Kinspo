export const selectAllPins = state => 
Object.values(state.entities.pins)

export const selectPinItems = (state, pin) => {
    return pin ? pin.pin_ids.map(id => state.entities.pins[id]) : [];
};

export const selectPinItem = (state, id) => {
    return state.entities.pins[id];
};
