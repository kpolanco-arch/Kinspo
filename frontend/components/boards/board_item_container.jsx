import { connect } from "react-redux";
import { fetchBoards, fetchBoard } from "../../actions/board_actions";
import { fetchPins } from "../../actions/pin_actions";
import { fetchSaved } from "../../actions/save_action";
import { withRouter } from "react-router-dom";
import { deleteBoard } from "../../actions/board_actions";
import { fetchUser } from "../../actions/user_actions";
import BoardItem from "./board_item";

const mapStateToProps = (state, ownProps) => ({
    pins: Object.values(state.entities.pins),
    board: state.entities.boards[ownProps.match.params.boardId],
    saved: state.entities.saved,
    currentUser: state.entities.users[state.session.id]

})

const mapDispatchToProps = dispatch => ({
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins()),
    fetchSaved: () => dispatch(fetchSaved()),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardItem));