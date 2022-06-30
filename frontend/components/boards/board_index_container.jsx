import { connect } from "react-redux";
import BoardIndex from "./board_index";
import { fetchBoards } from "../../actions/board_actions";
import { fetchPins } from "../../actions/pin_actions";
import { fetchSaved } from "../../actions/save_action";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
       //boards: Object.values(state.entities.boards),
  // currentUser: state.entities.users[state.session.id],
    // boards: state.entities.boards,
    // pins: Object.values(state.entities.pins),
    // saved: Object.values(state.entities.saved)

})

const mapDispatchToProps = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
    fetchPins: () => dispatch(fetchPins()),
    fetchSaved: () =>  dispatch(fetchSaved())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardIndex));