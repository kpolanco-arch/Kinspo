import { connect } from "react-redux";
import { createBoard } from "../../actions/board_actions";
import BoardCreate from "./board_create";
import { fetchUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    createBoard: (board) => dispatch(createBoard(board)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardCreate));