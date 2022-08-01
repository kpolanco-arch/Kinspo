import { connect } from "react-redux";
import PinShowItem from "./pin_show_item";
import { withRouter } from "react-router-dom";
import { fetchPin } from "../../actions/pin_actions";
import { fetchUsers } from "../../actions/user_actions";
import { fetchFollows, createFollow, deleteFollow } from "../../actions/follow_actions";

const mapStateToProps = (state, ownProps) => ({
    pin: state.entities.pins[ownProps.match.params.pinId],
    follows: state.entities.follows,
    currentUser: state.entities.users[state.session.id],
    boards: Object.values(state.entities.boards),
    saved: Object.values(state.entities.saved),
    users: state.entities.users,
})

const mapDispatchToProps = dispatch => ({
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    createSaved: (saved) => dispatch(createSaved(saved)),
    deleteSaved: (savedId) => dispatch(deleteSaved(savedId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchFollows: () => dispatch(fetchFollows()),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (follow) => dispatch(deleteFollow(follow))

})

export default connect(mapStateToProps,mapDispatchToProps)(PinShowItem)