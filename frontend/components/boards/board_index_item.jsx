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
                    <Link to={`/boards/${board.id}`}>
                        <div className='board-cover-container'>
                            <div className='board-cover-single'>
                                <div className="first-cover"></div>
                                <div className="cover-column-container" >
                                    <div className="second-cover"></div>
                                    <div className="third-cover"></div>
                                </div>
                                
                            </div>
                            <div className="board-cover-title">{board.name}</div>
                            {/* <div>{board.id.length}</div> */}
                        </div>
                        
                        {/* <BoardItem pins={pins} board={board} saved={saved} /> */}
                     </Link>       
                   
                        
                    
                    {/* <div className="board-label">{board.name}</div> */}
            </div>
        )
    }
}

export default BoardIndexItem;