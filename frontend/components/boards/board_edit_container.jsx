import { connect } from "react-redux";
import { createBoard, fetchBoard, fetchBoards, updateBoard } from "../../actions/board_actions";
import { withRouter } from "react-router-dom";
import BoardEdit from "./board_edit";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    createBoard: (board) => dispatch(createBoard(board)),
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    fetchBoards: () => dispatch(fetchBoards()),
    updateBoard:() => dispatch(updateBoard())
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardEdit));