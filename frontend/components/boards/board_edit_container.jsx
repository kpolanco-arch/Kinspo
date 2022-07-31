import { connect } from "react-redux";
import { createBoard } from "../../actions/board_actions";
import { withRouter } from "react-router-dom";
import BoardEdit from "./board_edit";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    createBoard: (board) => dispatch(createBoard(board))
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardEdit));