import { connect } from "react-redux";
import PinShowItem from "./pin_show_item";
import { withRouter } from "react-router-dom";
import { fetchPin } from "../../actions/pin_actions";

const mapStateToProps = (state, ownProps) => ({
    pin: state.entities.pins[ownProps.match.params.pinId],
    currentUser: state.entities.users[state.session.id],
    boards: Object.values(state.entities.boards),
    saved: Object.values(state.entities.saved),
})

const mapDispatchToProps = dispatch => ({
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    createSaved: (saved) => dispatch(createSaved(saved)),
    deleteSaved: (savedId) => dispatch(deleteSaved(savedId))

})

export default connect(mapStateToProps,mapDispatchToProps)(PinShowItem)