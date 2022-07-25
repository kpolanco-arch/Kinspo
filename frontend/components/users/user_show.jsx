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

    // this.props.pins.map(pin =>pin={pin})

    // display = (this.props.user.id == pin.creator_id)? 
    // pin : null


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
            
            <div className="gallery">
                    {/* {pins.map(pin => <UserShowPin key={pin.title} pin={pin} user={user} deletePin= {deletePin}/>)} */}
                <Link to={`/users/${user.id}/pins`}>
                <div className='pin-cover-container'>
                    <div className='pin-cover-single'>
                    </div>
                </div>
                </Link>
            </div>    
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
                
             
                {/* {pins.map(pin => <SavedShowPin key={pin.title} pin={pin} user={user} fetchSaved={fetchSaved} saved={saved} />)} */}

            
        </div>
        
    )


}

}

export default UserShow;