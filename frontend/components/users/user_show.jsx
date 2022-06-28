import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props){
        super(props)
    }

componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    // this.props.fetchPins();
}

render () {
    let user = this.props.user
    if (!user) {
        return null
    }
    // this.props.pins.map(pin =>pin={pin})

    // const display = (this.props.user.id == this.props.pin.creator_id)? 
    // this.props.pin : null


    return (
        <div>
            <h1>Username: </h1>
            <h2>Email: {this.props.user.email}</h2>
            <h2>Pins</h2>
            {/* <li>{display}</li> */}
        </div>
        
    )


}

}

export default UserShow;