import { connect } from "react-redux";
import PinCreate from "./pin_create";
import { createPin } from "../../actions/pin_actions";
import { createSaved, deleteSaved } from "../../actions/save_action";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    boards: Object.values(state.entities.boards),
    saved: Object.values(state.entities.saved),
    pin: state.entities.pins[ownProps.match.params.pinId]

})

const mapDispatchToProps = dispatch => ({
    createPin: (pin) => dispatch(createPin(pin)),
    createSaved: (saved) => dispatch(createSaved(saved)),
    deleteSaved: (savedId) => dispatch(deleteSaved(savedId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PinCreate)