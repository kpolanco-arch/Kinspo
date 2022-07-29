import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PinItem from './pin_item';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SavePin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);

    }

    showMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: !this.state.showMenu })
    }

    // componentDidMount() {
    //     // this.props.fetchPin(this.props.match.params.pinId)
    //     this.props.fetchPins();
    //     this.props.fetchBoards();
    //     this.props.fetchSaved();
    //     this.props.createSaved();
    //     // this.props.fetchUsers();
    // }

    render() {
        const { pin, currentUser, pins, createSaved, deleteSaved, boards, saved } = this.props;
        let userboards = boards.filter(board => board.creator_id === currentUser.id)
        // console.log(saved)
        let pinonBoards = saved.filter(pinsaved => pin.id === pinsaved.pin_id)

        const dropdownMenu = () => {
            let userboards = boards.filter(board => board.creator_id === currentUser.id)
            let pinonBoards = saved.filter(pinsaved => pin.id === pinsaved.pin_id)
            let pinonBoardArr = Object.values(saved)

           

            const saveStatus = (board) => {
                for (let i = 0; i < pinonBoards.length; i++) {
                    let pinonBoard = pinonBoards[i];

                    if (pinonBoard.board_id === board.id) {
                        return (
                            <div className='board-list-item'>
                                <div>{board.name}</div>
                                <button className='unsave-button' onClick={() => deleteSaved(pin.id)} >Saved</button>
                            </div>
                        )

                    }
                }

                let selectedPin
                for (let i = 0; i < pinonBoardArr.length; i++) {
                    if (pinonBoardArr[i].board_id === board.id) {
                        selectedPin = pinonBoardArr[i];

                        return (
                            <div className='board-list-item'>
                                <div>{board.name}</div>
                                <button className='save-button' onClick={() => createSaved({ pin_id: pin.id, user_id: currentUser.id, board_id: board.id })}>Save</button>
                            </div>
                        )
                    }
                }

                return (
                    <div className='board-list-item'>
                        <div>{board.name}</div>
                        <button className='save-button' onClick={() => createSaved({ pin_id: pin.id, user_id: currentUser.id, board_id: board.id })}>Save</button>
                    </div>
                )

            }

            return (
                <div className='board-list-background'>
                    <div className='board-list-title'>Save to board</div>
                    <div className='board-list-title-h2'>All boards</div>
                    <div>{userboards.map((board, i) => saveStatus(board, i))}</div>
                </div>
            )
        }
        return (
            
            <div className='open-menu'>
                <div onClick={this.showMenu} className = "open-menu-container">
                    <div>All Boards</div>
                    <span className="material-symbols-outlined">
                        expand_more
                    </span>
                    {pinonBoards.map(saved => saved.pin_id === pin.id).length > 0 ?
                        <button className="unsave-button">Saved</button> :
                <button className="save-button" >Save</button>}
                    {/* <button className='save-button'>Save</button> */}
                </div>
                {this.state.showMenu ? dropdownMenu() : null}
            </div>
        )

    }


}

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    // fetchBoards: () => dispatch(fetchBoards())
})


export default connect(mSTP, mDTP)(SavePin);

