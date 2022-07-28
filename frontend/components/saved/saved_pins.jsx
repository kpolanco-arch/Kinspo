import React, { Component } from 'react';
import { createSaved } from '../../util/save_util';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import SavePin from '../pins/save_pin';


class SavedShowPin extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchSaved();
        this.props.fetchPins();
   
    }

    render() {
        
        const { pins, pin, currentUser, deleteSaved, boards, saved, createSaved, savedpin} = this.props;
        return (
            <div className='gallery'>
                {/* <h2>Saved Pin</h2>
                <button type="submit" className='save-button' onClick={() => createSaved({pin_id: pin.id, user_id: currentUser.id })} >Save</button> */}
                <div className='grid-images'>
                    {pins.map((pin) => 
                    pin.id === savedpin.pin_id ? <div>
                        <Link to={`/pins/${pin.id}`} className="pin-index-container" >
                            <SavePin key={pin.title} pin={pin} createSaved={createSaved} currentUser={currentUser} deleteSaved={deleteSaved} boards={boards} saved={saved} />
                            <img src={pin.image_url} alt={pin.title} className="pin-index-img" />
                        </Link>
                            
                    </div> : null)}

                </div>
            </div>
        )
    }


}

export default SavedShowPin;