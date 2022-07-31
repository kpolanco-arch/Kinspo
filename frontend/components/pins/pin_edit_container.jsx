import { connect } from "react-redux";
import { createPin } from "../../actions/pin_actions";
import PinEdit from "./pin_edit";
import { createSaved, deleteSaved } from "../../actions/save_action";
import { fetchPin } from "../../actions/pin_actions";

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
    fetchPin: (pinId) => dispatch(fetchPin(pinId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinEdit)