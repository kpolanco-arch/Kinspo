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
    }

    render() {
        const { board, pins, saved } = this.props;
        console.log(saved)
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
                <div>
                    <h2>{board.name}</h2>
                    {pinsonBoard.length}
                    {pinsonBoard.map(pin => <SavedShowPin key={pin.title} pin={pin}/>)}
                </div>
            </div>
        )
    }
}

export default BoardItem;