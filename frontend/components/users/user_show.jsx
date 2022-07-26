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

    this.handleSubmit = this.handleSubmit.bind(this);
    }

componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPins();
    this.props.fetchSaved();
    this.props.fetchBoards();
    // this.props.deletePin();

}

handleSubmit(e){
    e.preventDefault();
    // const pinId = Object.assign({}, this.state)
    // this.props.deletePin(pinId)
}

render () {
    const { pins, deletePin, boards, createSaved, fetchSaved, saved } = this.props;
    let user = this.props.user
    if (!user) {
        return null
    }

    if (!saved) {
        return null
    }

    let cover1
   

    
    let savedArr= Object.values(saved) 
            // console.log(saved[0].pin_id )
            // cover1 = pins.map(pin => pin.id === saved[0].pin_id ? pin.image_url : null)
            // if (!cover1 === null){
            //     cover11 = cover1}

            // console.log(cover11)
    // if (savedArr.length < 1) {
    //     cover1 = null

    // } else {
    //     cover1 = pins[savedArr[0].pin_id].image_url
    // }
    
    // if (savedArr.length < 2) {
    //     cover2 = null
    // } else {
    //     cover2 = pins[savedArr[1].pin_id].image_url
    // }

    // if (savedArr.length < 3) {
    //     cover3 = null
    // } else {
    //     cover3 = pins[savedArr[2].pin_id].image_url
    // }



    return (
        <div>
            <div className='user-profile-info'>
                <div className='user-profile-image-container'></div>
                <h1>{this.props.user.username} User Profile</h1>
                <h2>{this.props.user.email}</h2>
                <div className='user-profile-followers'>
                    <h2>followers</h2>
                    <h2>following</h2>
                </div>
                <div className='type-board-container'>
                    <div className='type-board-text'>Created
                        <div className='type-board-underline'></div>
                    </div>
                    <div className='type-board-text'>Saved</div>
                </div>
                

            </div>
            
            <div className="gallery-user-profile">
                <Link to={`/users/${user.id}/pins`}>
                    <div className='board-cover-container'>
                        <div className='board-cover-single'>
                            <div className="first-cover-pin"></div>
                                        <div className="second-cover-pin"></div>
                                        <div className="third-cover-pin"></div>
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
                
             
                {/* {pins.map(pin => <SavedShowPin key={pin.title} pin={pin} user={user} fetchSaved={fetchSaved} saved={saved} />)} */}

            
        </div>
        
    )


}

}

export default UserShow;