import React from "react";
import BoardItem from "./board_item";

class BoardIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBoards();
        this.props.fetchPins();
    }

    render(){
        const { boards, pins, currentUser } = this.props;
        let boardArr = Object.values(boards)
        let personalBoards = boardArr.filter(board => board.user_id === currentUser.id)
        return (
            <div>
                {personalBoards.map(board => <BoardItem pins = {pins} board ={board}/>)}
            </div>
        )
    }
}

export default BoardIndex;