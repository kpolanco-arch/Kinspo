import React from "react";
import { Link } from "react-router-dom";
import BoardItem from "./board_item_container";
import { fetchPins } from "../../actions/pin_actions";
import { connect } from "react-redux";

class BoardIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

componentDidMount() {
    this.props.fetchPins();
}
    render() {
        const {board, pins, saved} = this.props;
        if (!board) {
            return null
        }

        if (Object.values(pins).length < 1) {
            return null
        }

        if (!saved) {
            return null
        }

        let savedArr= Object.values(saved).filter(savedPin => savedPin.board_id === board.id )
        // debugger
        let cover1, cover2, cover3

        if (savedArr.length < 1) {
            cover1 = null

        } else {
            // debugger
            cover1 = pins[savedArr[0].pin_id].image_url ? pins[savedArr[0].pin_id].image_url : pins[savedArr[0].pin_id].photoUrl
        }
        
        
        if (savedArr.length < 2) {
            cover2 = null
        } else {
            cover2 = pins[savedArr[1].pin_id].image_url || pins[savedArr[1].pin_id].photoUrl
        }

        if (savedArr.length < 3) {
            cover3 = null
        } else {
            cover3 = pins[savedArr[2].pin_id].image_url || pins[savedArr[2].pin_id].photoUrl
        }

        return (
            <div>
                    <Link to={`/boards/${board.id}`}>
                        <div className='board-cover-container'>
                            <div className='board-cover-single'>
                                <div className="first-cover">
                                    <img className="image-cover" src={cover1} alt=""/>
                                </div>
                                <div className="cover-column-container" >
                                    <div className="second-cover">
                                    <img className="image-cover" src={cover2} alt="" />
                                    </div>
                                    <div className="third-cover">
                                    <img className="image-cover" src={cover3} alt="" />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="board-cover-title">{board.name}</div>
                            {/* <div>{board.id.length}</div> */}
                        </div>
                        
                        {/* <BoardItem pins={pins} board={board} saved={saved} /> */}
                        </Link>  

                        <div className="edit-icon-board">
                            <Link to={`/boards/${board.id}/edit`}>
                                <button>
                                    <span className="material-symbols-outlined">
                                        edit
                                    </span>
                                </button>
                            </Link>
                        </div>
                        
                 </div>
        )
    }
}


const mapStateToProps = state => ({
    pins: state.entities.pins
})

const mapDispatchToProps = dispatch => ({
    fetchPins: () => dispatch(fetchPins())
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndexItem);