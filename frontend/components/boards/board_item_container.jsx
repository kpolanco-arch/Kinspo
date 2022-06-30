import { connect } from "react-redux";
import { fetchBoards } from "../../actions/board_actions";
import { fetchPins } from "../../actions/pin_actions";
import { fetchSaved } from "../../actions/save_action";
import BoardItem from "./board_item";

const mapStateToProps = state => ({
    pins: Object.values(state.entities.pins)
})

const mapDispatchToProps = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins()),
    fetchSaved: () => dispatch(fetchSaved())
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardItem);