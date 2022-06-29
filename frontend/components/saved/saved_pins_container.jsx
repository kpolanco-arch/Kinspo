import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteSaved, createSaved, fetchSaved } from "../../actions/save_action";
import SavedShowPin from "./saved_pins";


const mapStateToProps = (state, ownProps) => {
    
    return {
        currentUser: state.entities.users[state.session.id],
        saved: Object.values(state.entities.saved)
        // pin: state.entities.pins[ownProps.match.params.pinId],
    
    }
}

const mapDispatchToProps = dispatch => ({
    createSaved: (saved) => dispatch(createSaved(saved)),
    fetchSaved: () => dispatch(fetchSaved()),
    deleteSaved: savedId => dispatch(deleteSaved(savedId)),
    

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SavedShowPin))