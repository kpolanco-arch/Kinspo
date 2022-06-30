import React from "react";
import { Link } from "react-router-dom";

class BoardItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const {board, pins} = this.props;

        return (
            <div>
                <div className="board-container">
                    <Link to={`/boards/${board.id}`}>
                    </Link>
                    <div className="board-label">{board.title}</div>
                </div>
            </div>
        )
    }
}

export default BoardItem;