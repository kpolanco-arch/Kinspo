import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { fetchUser } from "../../actions/user_actions";

class BoardCreate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            creator_id: this.props.currentUser.id,
            description: '',
            errors: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateback = this.navigateback.bind(this),
        this.renderErrors = this.renderErrors.bind(this);

    }
    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id);
            
    }

    update(val) {
        return e => this.setState({ [val]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const errors = this.renderErrors();
        if (errors.length < 1) {
        const board = Object.assign({}, this.state)
        this.props.createBoard(board).then(this.props.history.push(`/users/${currentUser.id}`))}
        else {
            this.setState({
                errors: errors
            })
        }
    }

    renderErrors() {
        this.setState({
            errors: null
        })
        let errors = [];
        this.state.name ? null : errors.push("Board must have a name")
        return errors;
    }

    navigateback() {
        this.props.history.push(`/users/${currentUser.id}`)
    }

    render() {
        const { name, creator_id, description } = this.state;
        return (
            <div className="modal-background">
                <div className="background-board-create">
                    <div className="board-create-container">
                         
                        <div className="board-text-container">
                            <div onClick={this.navigateback}>
                                <span class="material-symbols-outlined">
                                    close
                                </span>
                            </div>
                            <div className="pin-show-description">
                                <h1 className="create-board-title">Create a Board</h1>
                                <div className="create-pin-form">
                                    <form className="create-board-form" onSubmit={this.handleSubmit}>
                                        <div>
                                            <label>Name</label>
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Like 'Places to Go' or 'Recipes to Make'" value={name} onChange={this.update('name')} />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Description" value={description} onChange={this.update('description')} />
                                        </div>
                                        <div className="create-button-container">
                                           <button className="create-button" type="submit">Create</button> 
                                        </div>
                                        <div className="error-text">{this.state.errors} </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BoardCreate);