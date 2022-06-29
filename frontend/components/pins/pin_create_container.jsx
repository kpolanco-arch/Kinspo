import { connect } from "react-redux";
import PinCreate from "./pin_create";
import { createPin } from "../../actions/pin_actions";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    createPin: (pin) => dispatch(createPin(pin))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinCreate)