import React from 'react';
import { Link } from 'react-router-dom';

class UserShowPin extends React.Component {
    constructor(props) {
        super(props)}

componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPins();
    this.props.fetchSaved();
    this.props.fetchBoards();
}

render() {

    const { pins, user, deletePin } = this.props;
    if (!user) {
        return null
    }
    if (!pins) {
        return null
    }

return (
    <div>
        <h1 className='all-pin-title'>All Pins</h1>
        <div className="gallery">
            <div className='grid-images'>
            {pins.map(pin =>
            pin.creator_id === user.id ? <div>
                    
                    <Link to={`/pins/${pin.id}`} className="pin-index-container" >
                        {/* <SavePin key={pin.title} pin={pin} createSaved={createSaved} deleteSaved={deleteSaved} boards={boards} saved={saved} /> */}
                        <img src={pin.image_url} alt={pin.title} className="pin-index-img" />
                    </Link>
                    <button type="submit" className='unsave-button' onClick={() => deletePin(pin.id)} >Delete
                    </button>
                    
                </div>: null )}
            </div> 
        </div>
    </div >
)
}
}

export default UserShowPin;

