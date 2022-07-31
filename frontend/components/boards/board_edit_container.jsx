import { connect } from "react-redux";
import { createBoard, fetchBoard, fetchBoards, updateBoard } from "../../actions/board_actions";
import { withRouter } from "react-router-dom";
import BoardEdit from "./board_edit";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    board: state.entities.boards[ownProps.match.params.boardId]

})

const mapDispatchToProps = dispatch => ({
    createBoard: (board) => dispatch(createBoard(board)),
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    fetchBoards: () => dispatch(fetchBoards()),
    updateBoard:(boardId) => dispatch(updateBoard(boardId))
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardEdit));