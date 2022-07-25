import { connect } from "react-redux";
import { fetchBoards, fetchBoard } from "../../actions/board_actions";
import { fetchPins } from "../../actions/pin_actions";
import { fetchSaved } from "../../actions/save_action";
import { withRouter } from "react-router-dom";
import BoardItem from "./board_item";

const mapStateToProps = (state, ownProps) => ({
    pins: Object.values(state.entities.pins),
    board: state.entities.boards[ownProps.match.params.boardId],
    saved: state.entities.saved

})

const mapDispatchToProps = dispatch => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins()),
    fetchSaved: () => dispatch(fetchSaved())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardItem));