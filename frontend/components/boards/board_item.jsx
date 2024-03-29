import React from "react";
import { Link } from "react-router-dom";
import SavedShowPin from "../saved/saved_pins_container";

class BoardItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
        // this.props.fetchBoards();
        this.props.fetchPins();
        this.props.fetchSaved();
        this.props.fetchUser(this.props.currentUser.id);
    }

    render() {
        const { board, pins, saved, deleteBoard } = this.props;
        // console.log(saved)
        if (!board) {
            return null
        }
        if (!pins) {
            return null
        }
        if (!saved) {
            return null
        }
        let savedArr = Object.values(saved)
        let pinsonBoard = savedArr.filter(savedpin => savedpin.board_id === board.id)
        
        //board show
        //board cover and link to pinitem with the appropiate boards
        return (
            <div>
                <div className="board-item-layout-container">
                    <div className="board-head-title">{board.name}
                        <div ><span className="material-symbols-outlined">
                            more_horiz
                        </span></div>
                            <div className="dropdown-content-delete">
                                    <Link to={`/users/${currentUser.id}`}>
                                <button className='unsave-button'onClick={() => deleteBoard(board.id)}>delete</button>
                                    </Link>
                            </div>  
                    </div>
                    <div className="user-profile-small-container"></div>
                    <div className="board-description-text">{board.description}</div>
                </div>    
                   <div className="pins-length-text"> {pinsonBoard.length} {(pinsonBoard.length > 1)? "Pins" : "Pin"}</div>
                   <div className="gallery">
                    {pinsonBoard.map(savedpin => <SavedShowPin key={savedpin.title} savedpin={savedpin}/>)}
                    </div>
            </div>
        )
    }
}

export default BoardItem;