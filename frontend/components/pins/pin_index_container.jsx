import { connect } from "react-redux";
import PinIndex from "./pin_index";
import { selectPinItems } from "../../reducers/selectors";
import { fetchPins, fetchPin } from "../../actions/pin_actions";
import { fetchUsers, fetchUser } from "../../actions/user_actions";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";


const mapStateToProps = (state, ownProps) => {
    // const { pinId } = useParams();
    // const pins_selected = state.entities.pins[ownProps.match.params.pinId];
    return {
        pins: Object.values(state.entities.pins)
    // pin: state.entities.pins[ownProps.match.params.pinId],
    // pins: Object.keys(state.entities.pins).map(key => state.entities.pins[key])
    // pin: state.entities.pins[pinId]

    // pins_selected,
    // pins: selectPinItems(state, pins_selected )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinIndex))