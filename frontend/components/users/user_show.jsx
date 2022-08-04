import React from 'react';
import { Link } from 'react-router-dom';
// import PinItem from '../pins/pin_item';
import UserShowPin from './user_show_pins';
import SavedShowPin from '../saved/saved_pins';
import { deletePin } from '../../util/pins_util';
import BoardIndexContainer from '../boards/board_index_container';

class UserShow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            modalOpen: false,
        }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }

componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchUsers();
    this.props.fetchPins().then(() => {
        this.props.fetchSaved(); })
    // this.props.fetchSaved();
    this.props.fetchBoards();
    this.props.fetchFollows();

}

closeModal(e) {
    e.preventDefault();
    this.setState({ modalOpen: !this.state.modalOpen })
}

handleSubmit(e){
    e.preventDefault();
    // const pinId = Object.assign({}, this.state)
    // this.props.deletePin(pinId)
}

render () {
    const { pins, users, follows, createFollow, deleteFollow, currentUser, deletePin, boards, createSaved, fetchSaved, saved } = this.props;
    let user = this.props.user
    if (!user) {
        return null
    }

    if (!saved) {
        return null
    }

    if (!pins) {
        return null
    }

    let savedArr = Object.values(saved).filter(savedPin => savedPin.user_id === currentUser.id)
    let cover1, cover2, cover3
    // console.log(pins)
    

    if (savedArr.length < 1) {
        cover1 = null

    } else {
        // console.log(pins[savedArr[0].pin_id])
        cover1 = (pins[savedArr[0].pin_id]).image_url ? (pins[savedArr[0].pin_id]).image_url : pins[savedArr[0].pin_id].photoUrl
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

    

const followArr = Object.values(follows)
const following = followArr.filter(follow => follow.user_id === user.id)
const followers = followArr.filter(follow => follow.follower_id === user.id)

    const dropdownFollow = () => {
        const followArr = Object.values(follows)
        const following = followArr.filter(follow => follow.user_id === user.id)
        const followers = followArr.filter(follow => follow.follower_id === user.id)

        // let userboards = boards.filter(board => board.creator_id === currentUser.id)
        // let pinonBoards = saved.filter(pinsaved => pin.id === pinsaved.pin_id)
        // let pinonBoardArr = Object.values(saved)
        const saveFollow = (follow) => {
            for (let i = 0; i < followArr.length; i++) {
                let followobj = followArr[i];

                if (followobj.user_id === currentUser.id && followobj.follower_id === follow.user_id) {
                    return (
                        
                        <div className='board-list-title'>Follows
                            <div className='board-list-item'>
                            <div>{users[follow.user_id].email}</div>
                            <button className='unsave-button' onClick={() => deleteFollow(followobj)} >Unfollow</button>
                            </div>
                        </div>
                    )

                }

        

            }

            
            for (let i = 0; i < followArr.length; i++) {
                    let followobj = followArr[i];
                if (followobj.user_id === currentUser.id && followobj.follower_id === follow.follower_id) {
                    return (
                        <div className='board-list-title'>Following
                            <div className='board-list-item'>
                            <div>{users[follow.follower_id].email}</div>
                                <button className='unsave-button' onClick={() => deleteFollow(followobj)} >Unfollow</button>
                            {/* <button className='save-button' onClick={() => createFollow({ user_id: currentUser.id, follower_id: follow.follower_id })}>Follow</button> */}
                            </div>
                        </div>
                    )
                }
            }

            return (
                <div className='board-list-item'>
                    <div className='board-list-title'></div>
                    <div className='board-list-title-h2'></div>
                    <div>{users[follow.follower_id].email}</div>
                    {/* <button className='save-button' onClick={() => createSaved({ pin_id: pin.id, user_id: currentUser.id, board_id: board.id })}>Save</button> */}
                </div>
            )

        }
        return (
            <div className='board-list-background'>
                <div>{followArr.map((follow, i) => saveFollow(follow, i))}</div>
            </div>
        )
    }
////actual return
    return (
        <div>
            <div className='user-profile-info'>
                <div className='user-profile-image-container'></div>
                <h1>{this.props.user.username}</h1>
                <h2>{this.props.user.email}</h2>
                <div onClick={this.closeModal} className='user-profile-followers'>
                    <h2>{followers.length} followers</h2>
                    <h2>{following.length} following</h2>
                </div>
                {this.state.modalOpen ? dropdownFollow() : null}

                <div className='type-board-container'>
                    {/* <div className='type-board-text'>Created
                        <div className='type-board-underline'></div>
                    </div> */}
                    <div className='type-board-text'>Saved
                        <div className='type-board-underline'></div>
                    </div>
                    
                </div>
                

            </div>
            
            <div className="gallery-user-profile">
                <Link to={`/users/${user.id}/pins`}>
                    <div className='board-cover-container'>
                        <div className='board-cover-single'>
                            <div className="first-cover-pin">
                                <img className="image-cover" src={cover1} />
                            </div>
                                        <div className="second-cover-pin">
                                            <img className="image-cover" src={cover2} />
                                        </div>
                                        <div className="third-cover-pin">
                                            <img className="image-cover" src={cover3} />
                                        </div>
                        </div>
                        <div className="board-cover-title">All Pins</div>
                    </div>    
                </Link>
                   
                <BoardIndexContainer key={user.username} pins = {pins} user = {user} boards = {boards} saved ={saved}/>
                <div className="dropdown">
                    <button type="submit" className='create-pin-button'>+</button>
                    <div className="dropdown-create" >
                        <ul>Create</ul>
                        <div className="create-button-options">
                            <ul><Link to="/boards/new" >Board </Link></ul>
                            <ul><Link to="/pins/new" >Pin </Link> </ul>
                        </div>  
                    </div>  
                </div>
            </div>
                
             
            
        </div>
        
    )


}

}

export default UserShow;