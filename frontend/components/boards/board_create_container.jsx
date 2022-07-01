import { connect } from "react-redux";
import { createBoard } from "../../actions/board_actions";
import BoardCreate from "./board_create";
import { withRouter } from "react-router-dom";
const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    createBoard: (board) => dispatch(createBoard(board))
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardCreate));