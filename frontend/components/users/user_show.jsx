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
                <h1>{this.props.user.username}</h1>
                <h2>{this.props.user.email}</h2>
                <h2>My Created Pins</h2>
            </div>
            
            <div className="gallery">
                {/* <button type="submit" onClick={() => deletePin(pin.id)} >Delete */}
                    {pins.map(pin => <UserShowPin key={pin.title} pin={pin} user={user} deletePin= {deletePin}/>)}
                {/* </button> */}
            </div>    
                <BoardIndexContainer pins = {pins} user = {user} boards = {boards} saved ={saved}/>
            <Link to="/boards/new" >
                <button type="submit" className='create-pin-button'>+</button>
            </Link>   
                {/* {pins.map(pin => <SavedShowPin key={pin.title} pin={pin} user={user} fetchSaved={fetchSaved} saved={saved} />)} */}

            
        </div>
        
    )


}

}

export default UserShow;