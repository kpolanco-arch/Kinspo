import React from 'react';
import { Link } from 'react-router-dom';
// import PinItem from '../pins/pin_item';
import UserShowPin from './user_show_pins';
import SavedShowPin from '../saved/saved_pins';

class UserShow extends React.Component {
    constructor(props){
        super(props)
    }

componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPins();
    this.props.fetchSaved();

}

render () {
    const { pins, createSaved, fetchSaved, saved } = this.props;
    let user = this.props.user
    if (!user) {
        return null
    }
    // this.props.pins.map(pin =>pin={pin})

    // display = (this.props.user.id == pin.creator_id)? 
    // pin : null


    return (
        <div>
            <h1>Username: </h1>
            <h2>Email: {this.props.user.email}</h2>
            <h2>My Pins</h2>
            <div className="gallery">
                {pins.map(pin => <UserShowPin key={pin.title} pin={pin} user={user} />)},
                {pins.map(pin => <SavedShowPin key={pin.title} pin={pin} user={user} fetchSaved={fetchSaved} saved={saved} />)}

            </div>
        </div>
        
    )


}

}

export default UserShow;