import { connect } from "react-redux";
import BoardIndex from "./board_index";
import { fetchBoards } from "../../actions/board_actions";
import { fetchPins } from "../../actions/pin_actions";

const mapStateToProps = state => ({
    boards: Object.values(state.entities.boards),
    currentUser: state.entities.users[state.session.id]

})

const mapDispatchToProps = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards),
    fetchPins: () => dispatch(fetchPins)
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);