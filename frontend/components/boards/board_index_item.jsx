import React from "react";
import { Link } from "react-router-dom";
import BoardItem from "./board_item_container";

class BoardIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const {board, pins, saved} = this.props;
        console.log(saved)
        if (!board) {
            return null
        }
        if(!pins) {
            return null
        }

        if (!saved) {
            return null
        }

        return (
            <div>
                <div className="board-container">
                    <Link to={`/boards/${board.id}`}>
                        <h3 >Cover to be placed ..</h3>
                        <h3>{board.id}</h3>
                        {/* <BoardItem pins={pins} board={board} saved={saved} /> */}
                     </Link>       
                   
                        
                    
                    {/* <div className="board-label">{board.name}</div> */}
                </div>
            </div>
        )
    }
}

export default BoardIndexItem;