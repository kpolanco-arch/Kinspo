import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class BoardCreate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            creator_id: this.props.currentUser.id,
            description: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateback = this.navigateback.bind(this)

    }

    update(val) {
        return e => this.setState({ [val]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const board = Object.assign({}, this.state)
        this.props.createBoard(board)
    }

    navigateback() {
        this.props.history.push('/')
    }

    render() {
        const { name, creator_id, description } = this.state;
        return (
            <div>
                <button onClick={this.navigateback}>X</button>
                <h1>Create a Board</h1>
                <div className="create-pin-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input type="text" value={name} onChange={this.update('name')} />

                        <label>Description</label>
                        <input type="text" value={description} onChange={this.update('description')} />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(BoardCreate);