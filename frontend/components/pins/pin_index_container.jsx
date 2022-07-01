import { connect } from "react-redux";
import PinIndex from "./pin_index";
import { selectPinItems } from "../../reducers/selectors";
import { fetchPins, fetchPin } from "../../actions/pin_actions";
import { fetchUsers, fetchUser } from "../../actions/user_actions";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { createSaved, deleteSaved } from "../../actions/save_action";
import { fetchBoards } from "../../actions/board_actions";
import { fetchSaved } from "../../actions/save_action";


const mapStateToProps = (state, ownProps) => {
    // const { pinId } = useParams();
    // const pins_selected = state.entities.pins[ownProps.match.params.pinId];
    return {
        pins: Object.values(state.entities.pins),
        boards: Object.values(state.entities.boards),
        saved: Object.values(state.entities.saved)
   
    // pins_selected,
    // pins: selectPinItems(state, pins_selected )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    createSaved: (saved) => dispatch(createSaved(saved)),
    deleteSaved: (savedId) => dispatch(deleteSaved(savedId)),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchSaved: () => dispatch(fetchSaved())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinIndex))