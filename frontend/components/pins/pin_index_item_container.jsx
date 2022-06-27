import { connect } from "react-redux";
import PinIndexItem from "./pin_index_item";
import { withRouter } from "react-router-dom";
import { fetchPin } from "../../actions/pin_actions";

const mapStateToProps = (state, ownProps) => ({
    pin: state.entities.pins[ownProps.match.params.pinId],
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    fetchPin: (pinId) => dispatch(fetchPin(pinId))

})

export default connect(mapStateToProps,mapDispatchToProps)(PinIndexItem)