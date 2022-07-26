import React from "react";
import BoardIndexItem from "./board_index_item";

class BoardIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBoards();
        this.props.fetchPins();
        this.props.fetchSaved();
    }
   
    render(){
        
        
        
        
        const { boards, pins, saved, currentUser, user } = this.props;
         
        let boardArr = Object.values(boards)
        // console.log(saved)
        let personalBoards = boardArr.filter(board => board.creator_id === user.id)
        return (
            <div className="gallery-boards">
                {/* <h1>My Boards</h1> */}
                {personalBoards.map(board => <BoardIndexItem key={board.title} pins = {pins} board ={board} saved = {saved}/>)}
            </div>
        )
    }
}

export default BoardIndex;