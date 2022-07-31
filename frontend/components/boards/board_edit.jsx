import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class BoardEdit extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.board;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateback = this.navigateback.bind(this)

    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    update(val) {
        return e => this.setState({ [val]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBoard(this.state)
    }

    navigateback() {
        this.props.history.push('/')
    }


    render() {
        const {board} = this.props;
        console.log(board)
        return (
            <div className="modal-background">
                <div className="background-board-create">
                    <div className="board-create-container">
                        {/* <div>
                            <button onClick={this.navigateback}>X</button>
                        </div> */}
                        <div className="board-text-container">
                            <div className="pin-show-description">
                                <h1 className="create-board-title">Create a Board</h1>
                                <div className="create-pin-form">
                                    <form className="create-board-form" onSubmit={this.handleSubmit}>
                                        <div>
                                            <label>Name</label>
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Like 'Places to Go' or 'Recipes to Make'" defaultValue={board.name} onChange={this.update('name')} />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Description" defaultValue={board.description} onChange={this.update('description')} />
                                        </div>
                                        <div className="create-button-container">
                                            <button className="create-button" type="submit">Update</button>
                                        </div>

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

export default BoardEdit;