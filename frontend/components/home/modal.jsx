import React from "react";
import { close } from "../../actions/modal";
import { connect } from "react-redux";
import LogInFormContainer from '../session/login_container';
import SignUpFormContainer from '../session/signup_form_container';

function Modal(modal, close) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'signup':
            component = <SignUpFormContainer />;
            break;
        default:
            return null;

    }
    return (
        <div className="modal-back">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(close())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);